---
name: final
description: Genera el tratamiento fotográfico "FINAL" (fondo sintético oscuro degradado, nitidez, saturación moderada, recentrado sin costura) para fotos de esculturas de Christián Acuña, con una versión sin título (solo número de catálogo) y una versión "FINALTITULO" con bloque tipográfico dorado estilo catálogo de museo (título / separador ◆ ◆ / subtítulo). Usar cuando el usuario suba una foto de una escultura y pida "FINAL", "FINALTITULO", el tratamiento final, o pida agregar título estilo catálogo con este tratamiento específico (distinto de MUSEO/DRAMATITULO, que es otro skill).
---

# FINAL / FINALTITULO

Skill independiente de MUSEO/DRAMATITULO — no compartir código entre ambos.

## Requisitos

```bash
pip install numpy opencv-python-headless pillow --break-system-packages
```

Fuentes necesarias en `assets/fonts/`:
- `Cinzel-Regular.ttf` (título, siempre en mayúsculas)
- `EBGaramond-Regular.ttf` (subtítulo)

Si faltan, descargar:
- Cinzel: Google Fonts (OFL)
- EBGaramond: `https://raw.githubusercontent.com/google/fonts/main/ofl/ebgaramond/EBGaramond%5Bwght%5D.ttf`

## Uso

Solo tratamiento (sin título, con número de catálogo si el nombre de archivo lo tiene):

```bash
python3 scripts/typography.py <foto_entrada> "" "" <salida.jpg>
```

En realidad para la versión SIN título usar el flujo `process()`/`process_transparent()` de `treatment.py` + `draw_catalog_number()` de `typography.py` (ver bloque `__main__` de `typography.py` como referencia del pipeline completo; para automatizar ambas salidas de una corrida conviene un script wrapper que llame a `process()`/`process_transparent()`, guarde la versión sin título con `draw_catalog_number()`, y aparte llame a `typography.py` para la versión con título).

Con título (FINALTITULO):

```bash
python3 scripts/typography.py <foto_entrada> "<TITULO>" "<subtitulo o vacío>" <salida_con_titulo.jpg>
```

Si se omiten título/subtítulo (`""`), se derivan automáticamente del nombre de archivo con el formato:

```
<NUM>_-_<Titulo>_-_<Subtitulo línea 1>_-_<Subtitulo línea 2>_-_...
```

(cada segmento `_-_` extra después del título es una línea de subtítulo nueva; `_` dentro de un segmento se convierte en espacio).

## Nomenclatura de salida

- Sin título: nombre original con espacios en vez de guiones bajos, sin prefijo, `.jpg`.
- Con título: mismo nombre + prefijo `x`, `.jpg`.
- Siempre `.jpg` (`quality=95`), nunca `.png`, para las salidas de este skill.

## Notas de memoria / RAM

En imágenes grandes (ej. 4284x5712) con RAM limitada (~4GB), correr el tratamiento sin título y el agregado de título como **procesos python separados** (no como dos funciones en el mismo proceso) para evitar OOM intermitente — ver comentarios en `process_transparent()` dentro de `scripts/treatment.py`.

## Parámetros por defecto (ajustados por feedback iterativo del usuario)

En `treatment.py`, función `process()`/`process_transparent()`:
- `sharpen_amount=0.5038848`
- `exposure=0.92`
- `saturation_factor=1.0248`
- `contrast=0.12`

En `synth_background()` (fondo sintético): `edge_color` con piso oscuro `0.03-0.05` (bordes muy oscuros, casi negros — pedido explícito del usuario). `center_color` con piso `0.40`.

Estos valores ya están escritos en el código de `scripts/treatment.py` tal cual — no hace falta tocarlos salvo que el usuario pida un ajuste nuevo.

## Detección de transparencia

`typography.py` detecta automáticamente si el PNG de entrada tiene canal alpha real (`alpha.min() < 250`) y usa `process_transparent()` en ese caso, o `process()` (detección Otsu de silueta) si no. No asumir por la extensión del archivo.

## Bugs conocidos ya resueltos en el código (no reintroducir)

- Halo/fantasma alrededor de la escultura: requiere `bg_feather` con `radius_px=150` (no un valor chico) en `process()`.
- Manchas oscuras puntuales retenidas cerca del contorno: umbral `not_bg_like` con rango `0.12–0.90` (no un rango angosto tipo `0.12–0.28`).
- Recentrado con título: usar `recomposite_after_shift()` (desplaza componentes y regenera el fondo entero sin costura), nunca centrar la imagen ya compuesta rellenando con negro puro.
