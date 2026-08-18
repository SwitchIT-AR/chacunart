"""
DRAMATITULO - typography overlay module.
Draws a museum-catalog style title block (TITLE / separator with diamonds / subtitle)
on top of the treated image, sized and centered to match the sculpture's visual width.
"""
from PIL import Image, ImageDraw, ImageFont
import os

GOLD = (200, 163, 106)  # #C8A36A
FONT_DIR = os.path.join(os.path.dirname(__file__), "..", "assets", "fonts")
FONT_PATH = os.path.join(FONT_DIR, "Cinzel-Regular.ttf")  # SOLO título (siempre mayúscula)
SUBTITLE_FONT_PATH = os.path.join(FONT_DIR, "EBGaramond-Regular.ttf")  # SOLO subtítulos (minúsculas reales)


def _font(size, weight="Regular"):
    f = ImageFont.truetype(FONT_PATH, size)
    try:
        f.set_variation_by_name(weight)
    except Exception:
        pass
    return f


def _subtitle_font(size, weight="Regular"):
    f = ImageFont.truetype(SUBTITLE_FONT_PATH, size)
    try:
        f.set_variation_by_name(weight)
    except Exception:
        pass
    return f


def _tracked_width(draw, text, font, tracking):
    if not text:
        return 0
    total = 0
    for ch in text:
        total += draw.textlength(ch, font=font) + tracking
    return total - tracking


def _draw_tracked_text(draw, xy, text, font, fill, tracking, anchor_center_x):
    width = _tracked_width(draw, text, font, tracking)
    x = anchor_center_x - width / 2
    y = xy[1]
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking
    return width


def fit_title_font(draw, text, max_width, max_height=None, weight="Regular",
                    tracking_ratio=0.10, start_size=260, min_size=40):
    if max_height is None:
        max_height = float("inf")
    size = start_size
    while size > min_size:
        font = _font(size, weight)
        tracking = int(size * tracking_ratio)
        w = _tracked_width(draw, text, font, tracking)
        bbox = draw.textbbox((0, 0), "H", font=font)
        h = bbox[3] - bbox[1]
        if w <= max_width and h <= max_height:
            return font, size, tracking
        size -= 2
    font = _font(min_size, weight)
    return font, min_size, int(min_size * tracking_ratio)


SQUARISH_ASPECT_THRESHOLD = 0.8  # ya no se usa para posicionar el título; se deja por compatibilidad


def draw_title_block(base_img, bbox, center_x, title, subtitle=None, catalog_num=None,
                      top_margin_px=None, block_width_ratio=0.85):
    """
    subtitle: None, un string suelto, o una LISTA de strings — cada item es
    su propia línea centrada debajo del separador. Gap título->escultura y
    margen superior son PROPORCIONALES al tamaño del título (ver GAP_PX y
    min_margin abajo). La LETRA nunca se achica. Si con gap=GAP_PX no
    entra, se reduce/elimina el gap (hasta 0); solo si ni con gap=0 entra,
    se permite que el bloque se solape con la escultura (ancla en
    min_margin). Devuelve (img, block_top, block_h).
    """
    img = base_img.convert("RGB")
    draw = ImageDraw.Draw(img)
    w, h = img.size
    x0, y0, x1, y1 = bbox
    top_space = y0
    max_block_width = w * 0.92

    title_u = title.strip().upper()
    if subtitle is None:
        subtitle_lines = []
    elif isinstance(subtitle, str):
        subtitle_lines = [subtitle] if subtitle.strip() else []
    else:
        subtitle_lines = [s for s in subtitle if s and s.strip()]
    subtitle_lines_u = [s.strip() for s in subtitle_lines]

    title_font, title_size, title_tracking = fit_title_font(
        draw, title_u, max_block_width, max_height=None, weight="Regular", tracking_ratio=0.12
    )
    enlarged_size = int(title_size * 1.35)
    enlarged_tracking = int(enlarged_size * 0.12)
    enlarged_font = _font(enlarged_size, weight="Regular")
    enlarged_width = _tracked_width(draw, title_u, enlarged_font, enlarged_tracking)
    if enlarged_width <= max_block_width:
        title_size = enlarged_size
        title_tracking = enlarged_tracking
        title_font = enlarged_font

    subtitle_size = max(18, int(title_size * 0.45 * 1.60))  # +60% a pedido del usuario (solo en FINALTITULO)

    sep_width = min(max_block_width, _tracked_width(draw, title_u, title_font, title_tracking)) * 0.92

    title_bbox = draw.textbbox((0, 0), "H", font=title_font)
    title_h = title_bbox[3] - title_bbox[1]
    gap1 = title_h * 0.55
    sep_h = max(2, int(title_size * 0.02))
    gap2 = title_h * 0.5
    n_sub = len(subtitle_lines_u)

    subtitle_font = _subtitle_font(subtitle_size, weight="Regular")
    subtitle_tracking = int(subtitle_size * 0.16)
    subtitle_bbox = draw.textbbox((0, 0), "H", font=subtitle_font) if n_sub else (0, 0, 0, 0)
    subtitle_line_h = subtitle_bbox[3] - subtitle_bbox[1] if n_sub else 0
    subtitle_line_gap = subtitle_line_h * 0.35
    subtitle_block_h = (n_sub * subtitle_line_h + max(0, n_sub - 1) * subtitle_line_gap) if n_sub else 0

    # Gap titulo->escultura y margen superior PROPORCIONALES al tamano del
    # titulo (a pedido del usuario: "separados solo un espacio similar al
    # tamano del titulo principal", y "el titulo no debe quedar muy pegado
    # a la parte superior"). Reemplaza los valores fijos en pixeles de
    # antes (GAP_PX=180, min_margin=130), que en imagenes de resolucion muy
    # alta con mucho espacio en blanco arriba de la escultura dejaban un
    # hueco enorme entre titulo y pieza. La LETRA nunca se achica: si con
    # gap=title_h no entra, se reduce el gap (hasta 0); solo si ni con
    # gap=0 entra, se permite solapar (min_margin).
    GAP_PX = title_h * 1.0
    min_margin = max(title_h * 0.5, 60)

    block_h = title_h + gap1 + sep_h + (gap2 + subtitle_block_h if n_sub else 0)

    gap_used = GAP_PX
    if top_space - gap_used - block_h < min_margin:
        gap_used = max(0, top_space - block_h - min_margin)

    block_top = max(top_space - gap_used - block_h, min_margin)

    cursor_y = block_top
    _draw_tracked_text(draw, (0, cursor_y - title_bbox[1]), title_u, title_font, GOLD,
                        title_tracking, center_x)
    cursor_y += title_h + gap1

    diamond = "\u25c6"
    dfont = _font(max(14, int(title_size * 0.16)), weight="Regular")
    d_bbox = draw.textbbox((0, 0), diamond, font=dfont)
    d_w = d_bbox[2] - d_bbox[0]
    d_gap = d_w * 0.6
    diamonds_w = d_w * 2 + d_gap
    line_y = cursor_y + sep_h / 2

    draw.line([(center_x - sep_width / 2, line_y),
               (center_x - diamonds_w / 2 - d_w * 1.2, line_y)], fill=GOLD, width=sep_h)
    draw.line([(center_x + diamonds_w / 2 + d_w * 1.2, line_y),
               (center_x + sep_width / 2, line_y)], fill=GOLD, width=sep_h)
    draw.text((center_x - diamonds_w / 2, line_y - (d_bbox[3] - d_bbox[1]) / 2 - d_bbox[1]),
               diamond, font=dfont, fill=GOLD)
    draw.text((center_x - diamonds_w / 2 + d_w + d_gap, line_y - (d_bbox[3] - d_bbox[1]) / 2 - d_bbox[1]),
               diamond, font=dfont, fill=GOLD)

    cursor_y += sep_h

    if subtitle_lines_u:
        cursor_y += gap2
        for i, line in enumerate(subtitle_lines_u):
            if i > 0:
                cursor_y += subtitle_line_gap
            _draw_tracked_text(draw, (0, cursor_y - subtitle_bbox[1]), line, subtitle_font,
                                GOLD, subtitle_tracking, center_x)
            cursor_y += subtitle_line_h

    if catalog_num:
        cat_text = str(catalog_num).strip()
        cat_size = max(10, int(subtitle_size / 3))
        cat_font = _font(cat_size, weight="Regular")
        cat_tracking = int(cat_size * 0.12)
        cat_width = _tracked_width(draw, cat_text, cat_font, cat_tracking)
        margin = int(w * 0.03)
        cat_bbox = draw.textbbox((0, 0), "H", font=cat_font)
        x_pos = w - margin - cat_width
        y_pos = h - margin - (cat_bbox[3] - cat_bbox[1])
        xx = x_pos
        for ch in cat_text:
            draw.text((xx, y_pos - cat_bbox[1]), ch, font=cat_font, fill=GOLD)
            xx += draw.textlength(ch, font=cat_font) + cat_tracking

    return img, block_top, block_h


def draw_catalog_number(base_img, catalog_num):
    """Dibuja SOLO el numero de catalogo (esquina inferior derecha, mismo
    estilo/color que el catalog_num de draw_title_block), para usar en la
    version FINAL SIN TITULO -- a pedido del usuario (ver
    final-skill-params.md, punto 9): "en FINAL va el numero de obra" en
    los proximos renders. No depende de un titulo, por eso el tamaño de
    fuente se calcula directo como proporcion del ancho de imagen
    (w*0.02) en vez de derivarse de subtitle_size/title_size como en
    draw_title_block."""
    img = base_img.convert("RGB")
    draw = ImageDraw.Draw(img)
    w, h = img.size
    cat_text = str(catalog_num).strip()
    cat_size = max(10, int(w * 0.02))
    cat_font = _font(cat_size, weight="Regular")
    cat_tracking = int(cat_size * 0.12)
    cat_width = _tracked_width(draw, cat_text, cat_font, cat_tracking)
    margin = int(w * 0.03)
    cat_bbox = draw.textbbox((0, 0), "H", font=cat_font)
    x_pos = w - margin - cat_width
    y_pos = h - margin - (cat_bbox[3] - cat_bbox[1])
    xx = x_pos
    for ch in cat_text:
        draw.text((xx, y_pos - cat_bbox[1]), ch, font=cat_font, fill=GOLD)
        xx += draw.textlength(ch, font=cat_font) + cat_tracking
    return img


def parse_filename_parts(path):
    """'<NUM>_-_<Title>_-_<Subtitle line 1>_-_<Subtitle line 2>_-_...'
    Returns (catalog_num, title, subtitle_lines) — subtitle_lines es una
    LISTA, cada segmento "_-_" extra después del título es una línea nueva
    (doble guion bajo colapsa a un espacio). Puede ser lista vacía."""
    stem = os.path.splitext(os.path.basename(path))[0]
    parts = stem.split("_-_")
    if len(parts) >= 2:
        catalog = parts[0].strip()
        title = " ".join(parts[1].replace("_", " ").split())
        subtitle_lines = [" ".join(p.replace("_", " ").split()) for p in parts[2:]]
        subtitle_lines = [s for s in subtitle_lines if s]
        return catalog, title, subtitle_lines
    return None, " ".join(stem.replace("_", " ").split()), []


if __name__ == "__main__":
    import sys
    import numpy as np
    sys.path.insert(0, os.path.dirname(__file__))
    from PIL import Image as _Image
    from treatment import process, process_transparent, recomposite_after_shift

    inp = sys.argv[1]
    _catalog, parsed_title, parsed_subtitle = parse_filename_parts(inp)
    title = sys.argv[2] if len(sys.argv) > 2 and sys.argv[2] else parsed_title
    subtitle = sys.argv[3] if len(sys.argv) > 3 and sys.argv[3] else parsed_subtitle
    if len(sys.argv) > 4 and sys.argv[4]:
        outp = sys.argv[4]
    else:
        in_stem, in_ext = os.path.splitext(os.path.basename(inp))
        outp = "x" + in_stem.replace("_", " ") + ".jpg"  # v20: JPG, no el in_ext original

    _probe = _Image.open(inp).convert("RGBA")
    _alpha_arr = np.asarray(_probe)[..., 3]
    has_real_alpha = _alpha_arr.min() < 250
    if has_real_alpha:
        treated, bbox, cx, recenter_data = process_transparent(inp)
    else:
        treated, bbox, cx, recenter_data = process(inp)

    w, h = treated.size

    # Paso 1: medir donde iria el titulo SIN dibujarlo todavia (lienzo en
    # blanco descartable), solo para calcular el desplazamiento de
    # recentrado ANTES de generar el fondo final (v17 -- ver changelog).
    _dummy = Image.new("RGB", (w, h))
    _, block_top, block_h = draw_title_block(_dummy, bbox, cx, title, subtitle, catalog_num=_catalog)

    content_bbox = (bbox[0], block_top, bbox[2], bbox[3])
    ccx = (content_bbox[0] + content_bbox[2]) / 2
    ccy = (content_bbox[1] + content_bbox[3]) / 2
    dx = int(round(w / 2 - ccx))
    dy = int(round(h / 2 - ccy))

    # Paso 2: desplazar la escultura tratada (SIN fondo compuesto) y
    # regenerar el degrade de fondo DE UNA SOLA VEZ sobre el lienzo ya
    # recentrado -- sin relleno de negro puro ni costura.
    composited, shifted_bbox = recomposite_after_shift(recenter_data, dx, dy, bbox)

    # Paso 3: recien AHORA dibujar el titulo, sobre el fondo ya recentrado
    # y sin costura, en la posicion que le corresponde.
    final, _, _ = draw_title_block(composited, shifted_bbox, w / 2, title, subtitle, catalog_num=_catalog)

    final.convert("RGB").save(outp, quality=95)  # v20: JPG
    print("saved", outp)
