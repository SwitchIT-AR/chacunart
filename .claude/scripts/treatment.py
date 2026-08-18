"""
FINAL - photographic treatment module.
Independiente de MUSEO/DRAMATITULO (no comparte código ni parámetros con
esos scripts, y nunca debe modificarlos ni ser modificado por ellos).

Principios de FINAL:
  - balance de blancos MUY suave (no fuerza la temperatura de color real)
  - curva de tonos: la misma que MUSEO (tone_curve copiada literal)
  - UNA sola pasada de nitidez, radio chico, aplicada SOLO sobre la
    escultura (nunca sobre el fondo)
  - saturación moderada (ajustable, valor por defecto acordado: 1.464)
  - viñeta: la misma que MUSEO (relativa al bbox de la escultura)
  - suavizado de contorno: detección de silueta por luminancia (Otsu),
    relleno de agujeros internos, feather + defringe + sombra de contacto

process() devuelve (imagen, bbox, cx). process_transparent() es la
variante para PNGs con alpha real (ver punto 7 arriba) — misma firma de
retorno, para que typography.py pueda usar cualquiera de las dos.
"""
import numpy as np
import cv2
from PIL import Image


def load_rgb_float(path):
    im = Image.open(path).convert("RGB")
    return np.asarray(im).astype(np.float32) / 255.0


def white_balance(arr, strength=0.25):
    means = arr.reshape(-1, 3).mean(axis=0)
    gray = means.mean()
    scale = np.clip(gray / np.clip(means, 1e-4, None), 0.93, 1.07)
    corrected = arr * scale
    return np.clip(arr * (1 - strength) + corrected * strength, 0, 1)


def tone_curve(arr, black_crush=0.06, shadow_lift=0.035, highlight_knee=0.82, contrast=0.12):
    """Copiado literal del tone_curve de MUSEO, a pedido del usuario."""
    x = arr.copy()
    x = np.where(x < black_crush, x * (x / black_crush) * 0.5, x)
    shadow_mask = np.clip((0.35 - x) / 0.35, 0, 1) ** 2
    x = x + shadow_lift * shadow_mask * (x > black_crush)
    x = x + contrast * (x - 0.5) * (1 - np.abs(2 * x - 1))
    over = np.clip((x - highlight_knee) / (1 - highlight_knee), 0, 1)
    x = np.where(x > highlight_knee,
                 highlight_knee + (1 - highlight_knee) * (1 - (1 - over) ** 2) * 0.9,
                 x)
    return np.clip(x, 0, 1)


def single_sharpen(arr, w, radius_px=None, amount=0.373248):
    if radius_px is None:
        radius_px = max(1.2, w / 900)
    blurred = cv2.GaussianBlur(arr, (0, 0), sigmaX=radius_px)
    out = arr + amount * (arr - blurred)
    return np.clip(out, 0, 1)


def subtle_saturation(arr, factor=1.22):
    arr_u8 = (arr * 255).astype(np.uint8)
    hsv = cv2.cvtColor(arr_u8, cv2.COLOR_RGB2HSV).astype(np.float32)
    hsv[..., 1] = np.clip(hsv[..., 1] * factor, 0, 255)
    out = cv2.cvtColor(hsv.astype(np.uint8), cv2.COLOR_HSV2RGB)
    return out.astype(np.float32) / 255.0


def vignette(arr, bbox):
    """Copiado literal de la viñeta de MUSEO: relativa al bbox de la
    escultura, no un circulo sobre todo el lienzo."""
    h, w = arr.shape[:2]
    x0, y0, x1, y1 = bbox
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    bw, bh = (x1 - x0), (y1 - y0)
    yy, xx = np.ogrid[0:h, 0:w]
    nx = np.abs(xx.astype(np.float32) - cx) / (bw / 2 + 1e-3)
    ny = np.abs(yy.astype(np.float32) - cy) / (bh / 2 + 1e-3)
    dist = np.maximum(nx, ny)
    del nx, ny
    darken = np.clip((dist - 1.05) / (2.2 - 1.05), 0, 1)
    del dist
    mult = (1 - 0.85 * (darken ** 1.6)).astype(np.float32)
    del darken
    arr = arr * mult[..., None]
    return np.clip(arr, 0, 1)


def subject_mask_solid(arr):
    """Mascara sujeto/fondo por Otsu sobre luminancia + relleno de huecos.
    Kernel de CIERRE grande (41x41) para fusionar islas de grano/veta."""
    lum = 0.2126 * arr[..., 0] + 0.7152 * arr[..., 1] + 0.0722 * arr[..., 2]
    blurred = cv2.GaussianBlur(lum, (0, 0), sigmaX=3)
    u8 = (np.clip(blurred, 0, 1) * 255).astype(np.uint8)
    _, mask = cv2.threshold(u8, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    mask = (mask > 0).astype(np.uint8)
    kernel_open = np.ones((5, 5), np.uint8)
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel_open)
    kernel_close = np.ones((41, 41), np.uint8)
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel_close)

    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    solid = np.zeros_like(mask)
    cv2.drawContours(solid, contours, -1, 1, thickness=cv2.FILLED)
    return mask, solid


def solid_bbox(solid_mask, margin=0.02):
    h, w = solid_mask.shape[:2]
    ys, xs = np.where(solid_mask > 0)
    if len(xs) == 0:
        return (0, 0, w, h), w / 2
    x0, x1 = xs.min(), xs.max()
    y0, y1 = ys.min(), ys.max()
    mx = int((x1 - x0) * margin)
    my = int((y1 - y0) * margin)
    x0 = max(0, x0 - mx); x1 = min(w, x1 + mx)
    y0 = max(0, y0 - my); y1 = min(h, y1 + my)
    cx = (x0 + x1) / 2
    return (int(x0), int(y0), int(x1), int(y1)), cx


def feather_mask(mask, radius_px=5):
    m = mask.astype(np.float32)
    m = cv2.GaussianBlur(m, (0, 0), sigmaX=radius_px)
    return np.clip(m, 0, 1)


def defringe(arr, feathered_solid_mask, band_px=8):
    edge_band = ((feathered_solid_mask > 0.03) & (feathered_solid_mask < 0.97)).astype(np.float32)
    edge_band = cv2.GaussianBlur(edge_band, (0, 0), sigmaX=band_px * 0.4)
    arr_u8 = (arr * 255).astype(np.uint8)
    gray = cv2.cvtColor(arr_u8, cv2.COLOR_RGB2GRAY)
    gray_rgb = cv2.cvtColor(gray, cv2.COLOR_GRAY2RGB).astype(np.float32) / 255.0
    desat = arr * 0.55 + gray_rgb * 0.45
    darker = desat * 0.85
    out = arr * (1 - edge_band[..., None]) + darker * edge_band[..., None]
    return np.clip(out, 0, 1)


def contact_shadow(arr, solid_mask, strength=0.22):
    h, w = arr.shape[:2]
    ys, xs = np.where(solid_mask > 0)
    y1 = ys.max()
    x0, x1 = xs.min(), xs.max()
    cx = (x0 + x1) / 2
    bw = (x1 - x0)
    yy, xx = np.ogrid[0:h, 0:w]
    band_h = max(20, int(h * 0.03))
    y_in_band = np.clip(1 - np.abs(yy - y1) / band_h, 0, 1)
    x_norm = np.clip(np.abs(xx - cx) / (bw * 0.55), 0, 1)
    shadow = (y_in_band * (1 - x_norm) ** 1.5).astype(np.float32)
    shadow_only_below = shadow * (yy >= (y1 - band_h * 0.3))
    mult = (1 - strength * shadow_only_below).astype(np.float32)
    return np.clip(arr * mult[..., None], 0, 1)


def recenter_canvas(arr, content_bbox):
    """Centra SOLO horizontalmente (nunca verticalmente) -- centrar
    tambien en vertical podia dejar una franja negra grande arriba en
    piezas con marco fisico. Ver recenter_canvas_both() para la variante
    que SI centra en ambos ejes (usada por FINALTITULO)."""
    h, w = arr.shape[:2]
    x0, y0, x1, y1 = content_bbox
    ccx = (x0 + x1) / 2
    dx = int(round(w / 2 - ccx))
    dy = 0
    out = np.zeros_like(arr)
    src_x0, src_x1 = max(0, -dx), min(w, w - dx)
    src_y0, src_y1 = max(0, -dy), min(h, h - dy)
    dst_x0, dst_x1 = max(0, dx), min(w, w + dx)
    dst_y0, dst_y1 = max(0, dy), min(h, h + dy)
    out[dst_y0:dst_y1, dst_x0:dst_x1] = arr[src_y0:src_y1, src_x0:src_x1]
    return out


def recenter_canvas_both(arr, content_bbox):
    """[DEPRECADO para el flujo de recentrado con titulo -- ver v17 en el
    changelog. Se dejaba centrar la imagen YA compuesta (fondo+escultura)
    con relleno de np.zeros (negro puro) en el area sobrante, lo que
    dejaba una linea de corte visible entre el degrade real y el relleno.
    Reemplazada por shift_array() + recomposite_after_shift(), que
    desplazan los COMPONENTES antes de componer y regeneran el fondo
    entero de una sola vez sobre el lienzo ya recentrado -- sin costura.
    Esta funcion se deja en el codigo por compatibilidad pero
    typography.py ya NO la usa.] Centra TANTO horizontal COMO
    verticalmente, usando el bbox del CONJUNTO completo (titulo+escultura)."""
    h, w = arr.shape[:2]
    x0, y0, x1, y1 = content_bbox
    ccx = (x0 + x1) / 2
    ccy = (y0 + y1) / 2
    dx = int(round(w / 2 - ccx))
    dy = int(round(h / 2 - ccy))
    out = np.zeros_like(arr)
    src_x0, src_x1 = max(0, -dx), min(w, w - dx)
    src_y0, src_y1 = max(0, -dy), min(h, h - dy)
    dst_x0, dst_x1 = max(0, dx), min(w, w + dx)
    dst_y0, dst_y1 = max(0, dy), min(h, h + dy)
    out[dst_y0:dst_y1, dst_x0:dst_x1] = arr[src_y0:src_y1, src_x0:src_x1]
    return out


def shift_array(arr, dx, dy):
    """Desplaza un array 2D o 3D por (dx,dy), rellenando con CEROS el area
    sin datos -- el relleno se vuelve invisible porque despues se
    regenera el fondo ENTERO desde cero sobre el lienzo ya desplazado
    (ver recomposite_after_shift, usada por typography.py en vez de
    recenter_canvas_both -- v17)."""
    h, w = arr.shape[:2]
    out = np.zeros_like(arr)
    src_x0, src_x1 = max(0, -dx), min(w, w - dx)
    src_y0, src_y1 = max(0, -dy), min(h, h - dy)
    dst_x0, dst_x1 = max(0, dx), min(w, w + dx)
    dst_y0, dst_y1 = max(0, dy), min(h, h + dy)
    out[dst_y0:dst_y1, dst_x0:dst_x1] = arr[src_y0:src_y1, src_x0:src_x1]
    return out


def synth_background(arr, solid_mask, bbox, base_color=None):
    """Fondo COMPLETAMENTE NUEVO (radial smoothstep + grano), tono tomado
    del color promedio real del fondo. Distingue fondo EXTERIOR (flood-fill
    desde el borde) de huecos/vanos INTERNOS entre piezas (se rellenan con
    tono oscuro parejo, no el degrade radial completo).

    base_color: si se pasa, se usa en vez de calcularlo de
    arr[solid_mask==0] -- necesario cuando arr/solid_mask ya fueron
    desplazados con shift_array() y tienen relleno de ceros, que sesgaria
    el promedio hacia el negro (ver v17)."""
    h, w = arr.shape[:2]
    if base_color is None:
        bg_pixels = arr[solid_mask == 0]
        base_color = bg_pixels.mean(axis=0) if len(bg_pixels) else np.array([0.05, 0.05, 0.05], dtype=np.float32)
    center_color = np.clip(base_color * 2.2 + 0.02, 0.40, 0.55).astype(np.float32)  # v26: piso 0.15(v25)->0.40, ver changelog v26
    edge_color = np.clip(base_color * 0.05 + 0.03, 0.03, 0.05).astype(np.float32)  # v27: bordes mas oscuros/negros a pedido explicito del usuario (antes v26: 0.14-0.17)
    bg_u8 = (solid_mask == 0).astype(np.uint8)
    flood = bg_u8.copy()
    flood_mask = np.zeros((h + 2, w + 2), np.uint8)
    cv2.floodFill(flood, flood_mask, (0, 0), 2)
    is_exterior = (flood == 2)
    is_interior_gap = (bg_u8 == 1) & (~is_exterior)
    x0, y0, x1, y1 = bbox
    bw, bh = (x1 - x0), (y1 - y0)
    cx = (x0 + x1) / 2
    cy = (y0 + y1) / 2  # centrado en la escultura (v20: antes 15% desde arriba, quedaba claro cerca del titulo)
    yy, xx = np.ogrid[0:h, 0:w]
    # v26: escala del radial relativa al tamaño de la ESCULTURA (bbox), con
    # piso de la mitad del lienzo -- antes siempre w*0.75/h*0.75 fijo, lo que
    # hacia que objetos que ocupan casi todo el lienzo (margen visible angosto)
    # cayeran enteros en la cola ya casi-negra del degrade. Ver changelog v26.
    scale_x = max(bw, w * 0.5) * 0.9
    scale_y = max(bh, h * 0.5) * 0.9
    nx = (xx.astype(np.float32) - cx) / scale_x
    ny = (yy.astype(np.float32) - cy) / scale_y
    dist = np.clip(np.sqrt(nx * nx + ny * ny), 0, 1)
    del nx, ny
    t = dist * dist * (3 - 2 * dist)
    del dist
    grad = center_color[None, None, :] * (1 - t[..., None]) + edge_color[None, None, :] * t[..., None]
    del t
    grad = np.where(is_interior_gap[..., None], edge_color[None, None, :] * 0.6, grad)
    noise = np.random.default_rng(7).normal(0, 0.006, size=(h, w)).astype(np.float32)
    noise = cv2.GaussianBlur(noise, (0, 0), sigmaX=0.6)
    grad = grad + noise[..., None]
    return np.clip(grad, 0, 1)


def process(input_path,
            sharpen_amount=0.5038848,
            saturation_factor=1.0248,
            contrast=0.12,
            exposure=0.92):
    arr = load_rgb_float(input_path)
    h, w = arr.shape[:2]
    arr = white_balance(arr)
    _, solid_early = subject_mask_solid(arr)
    bbox, cx = solid_bbox(solid_early)
    arr = tone_curve(arr, contrast=contrast)
    arr = np.clip(arr * exposure, 0, 1)
    sharpen_feather = feather_mask(solid_early, radius_px=8)
    sharpened = single_sharpen(arr, w, amount=sharpen_amount)
    m = sharpen_feather[..., None]
    arr = np.clip(sharpened * m + arr * (1 - m), 0, 1)
    arr = subtle_saturation(arr, factor=saturation_factor)
    safe_kernel = np.ones((301, 301), np.uint8)  # ~150px de radio
    solid_safe = cv2.dilate(solid_early, safe_kernel)
    bg_pixels = arr[solid_safe == 0]
    base_color = bg_pixels.mean(axis=0) if len(bg_pixels) else np.array([0.05, 0.05, 0.05], dtype=np.float32)
    new_bg = synth_background(arr, solid_safe, bbox, base_color=base_color)
    bg_feather = feather_mask(solid_safe, radius_px=150)  # v22: 6->150, ver changelog (fantasma/halo offset)
    color_dist = np.linalg.norm(arr - new_bg, axis=2)
    not_bg_like = np.clip((color_dist - 0.12) / (0.90 - 0.12), 0, 1)  # v24: 0.28->0.90, ver changelog (mancha retenida)
    bm = np.maximum(bg_feather, not_bg_like)
    out_arr = np.clip(arr * bm[..., None] + new_bg * (1 - bm[..., None]), 0, 1)
    out = Image.fromarray((np.clip(out_arr, 0, 1) * 255).astype(np.uint8))
    # recenter_data: todo lo necesario para regenerar el fondo SIN COSTURA
    # despues de un recentrado (ver recomposite_after_shift, v17) -- arr es
    # la escultura tratada pero SIN fondo sintetico compuesto (conserva el
    # fondo real, que es lo que synth_background necesita para samplear color).
    recenter_data = (arr, bm, solid_safe, base_color)
    return out, bbox, cx, recenter_data


def process_transparent(input_path,
                         sharpen_amount=0.5038848,
                         saturation_factor=1.0248,
                         contrast=0.12,
                         exposure=0.92):
    """Variante de process() para PNG con canal alpha REAL (ver punto 7
    arriba sobre como verificar esto antes de llamarla).

    NOTA DE MEMORIA (v19): en imagenes de 4284x5712 el pipeline completo
    puede acercarse al limite de RAM disponible (~3.9GB) y el proceso
    puede ser matado por OOM de forma intermitente (no siempre en la
    misma imagen -- es un margen ajustado, no un bug de una foto en
    particular). Por eso hay `del` explicitos + gc.collect() sobre
    arrays intermedios que ya no hacen falta. Si vuelve a pasar un OOM
    pese a esto, correr el tratamiento (sin titulo) y el agregado de
    titulo en DOS invocaciones de proceso SEPARADAS (dos scripts python
    distintos, no dos funciones en el mismo proceso) para que el SO libere
    toda la memoria entre una etapa y la otra."""
    import gc
    im = Image.open(input_path).convert("RGBA")
    rgba = np.asarray(im).astype(np.float32) / 255.0
    del im
    rgb = rgba[..., :3].copy()
    alpha = rgba[..., 3]
    del rgba
    h, w = alpha.shape[:2]
    alpha_u8 = (np.clip(alpha, 0, 1) * 255).astype(np.uint8)
    _, mask_bin = cv2.threshold(alpha_u8, 127, 255, cv2.THRESH_BINARY)
    del alpha_u8
    mask_bin = (mask_bin > 0).astype(np.uint8)
    contours, _ = cv2.findContours(mask_bin, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    del mask_bin
    solid = np.zeros((h, w), dtype=np.uint8)
    cv2.drawContours(solid, contours, -1, 1, thickness=cv2.FILLED)
    del contours
    bbox, cx = solid_bbox(solid)
    neutral = 0.5
    rgb_comp = rgb * alpha[..., None] + neutral * (1 - alpha[..., None])
    del rgb
    arr = white_balance(rgb_comp)
    del rgb_comp
    arr = tone_curve(arr, contrast=contrast)
    arr = np.clip(arr * exposure, 0, 1)
    gc.collect()
    sharpen_feather = feather_mask(solid, radius_px=8)
    sharpened = single_sharpen(arr, w, amount=sharpen_amount)
    m = sharpen_feather[..., None]
    arr = np.clip(sharpened * m + arr * (1 - m), 0, 1)
    del sharpened, m, sharpen_feather
    gc.collect()
    arr = subtle_saturation(arr, factor=saturation_factor)
    safe_kernel = np.ones((21, 21), np.uint8)
    solid_safe = cv2.dilate(solid, safe_kernel)
    bg_pixels = arr[solid_safe == 0]
    base_color = bg_pixels.mean(axis=0) if len(bg_pixels) else np.array([0.05, 0.05, 0.05], dtype=np.float32)
    new_bg = synth_background(arr, solid_safe, bbox, base_color=base_color)
    alpha_feather = cv2.GaussianBlur(alpha, (0, 0), sigmaX=1.5)
    bm = alpha_feather
    out_arr = np.clip(arr * bm[..., None] + new_bg * (1 - bm[..., None]), 0, 1)
    out = Image.fromarray((np.clip(out_arr, 0, 1) * 255).astype(np.uint8))
    recenter_data = (arr, bm, solid_safe, base_color)
    return out, bbox, cx, recenter_data


def recomposite_after_shift(recenter_data, dx, dy, bbox):
    """Regenera el fondo SIN COSTURA despues de desplazar el conjunto por
    (dx,dy) (recentrado horizontal+vertical). En vez de desplazar la
    imagen YA compuesta (fondo+escultura) y rellenar el hueco con negro
    puro (dejaba una linea de corte visible -- v17), se desplazan los
    COMPONENTES (escultura tratada sin fondo, mascara de mezcla, mascara
    de seguridad) y se regenera el degrade de fondo DE UNA SOLA VEZ sobre
    el lienzo ya recentrado, usando base_color precalculado (no sesgado
    por el relleno de ceros). Devuelve (imagen final PIL, bbox desplazado)."""
    arr, bm, solid_safe, base_color = recenter_data
    shifted_arr = shift_array(arr, dx, dy)
    shifted_bm = shift_array(bm, dx, dy)
    shifted_solid_safe = shift_array(solid_safe, dx, dy)
    shifted_bbox = (bbox[0] + dx, bbox[1] + dy, bbox[2] + dx, bbox[3] + dy)
    fresh_bg = synth_background(shifted_arr, shifted_solid_safe, shifted_bbox, base_color=base_color)
    out_arr = np.clip(shifted_arr * shifted_bm[..., None] + fresh_bg * (1 - shifted_bm[..., None]), 0, 1)
    out = Image.fromarray((np.clip(out_arr, 0, 1) * 255).astype(np.uint8))
    return out, shifted_bbox


if __name__ == "__main__":
    import sys
    inp = sys.argv[1]
    outp = sys.argv[2] if len(sys.argv) > 2 else "final_treated.jpg"
    out, bbox, cx, _ = process(inp)
    out.save(outp, quality=96)
    print("bbox", bbox, "center_x", cx, "size", out.size)
