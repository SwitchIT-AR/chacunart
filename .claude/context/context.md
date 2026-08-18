# Contexto del proyecto — chacunart (sitio de Christián Acuña, escultor)

Este documento resume cómo está pensado el sitio, basado en `.claude/context/Estructura.xlsx`
(diseño funcional del menú y las obras) y `.claude/context/OBRAS.xlsx` (planilla maestra de datos
de las obras), cruzado con el código actual en `src/`. Sirve como referencia rápida para futuros
pedidos de cambios: qué es la intención de diseño, qué está implementado, y dónde divergen.

## Qué es el sitio

Portfolio del escultor Christián Acuña, especializado en arte reciclado con maderas y materiales
del Río de la Plata, más una colección de arte africano (báculos y máscaras). Navegación tipo
menú principal con submenús (por año, por serie, etc.), cada obra con foto principal, galería de
fotos adicionales, ficha técnica y video opcional de YouTube.

## Modelo de datos (según OBRAS.xlsx, planilla maestra del artista)

Columnas: `TIPO | SERIE | NUMERO | xx | NOMBRE | AÑO | MEDIDAS | PESO | DESCRIPCION | Precio U$S | ESTADO | DESTINATARIO | TECNICA | VIDEO`

- Cada obra aparece **duplicada como filas**: una fila con `TIPO = "OBRAS SERIE"` (agrupada por
  `SERIE`, ej. "Re-Cuadros") y otra con `TIPO = "OBRAS AÑO"` (agrupada por año en la columna
  `SERIE`). Es la misma obra vista desde dos agrupamientos distintos del menú.
- `NUMERO` es el identificador de 4 dígitos de la obra (ej. `0152`) — coincide con el campo
  `numero` de `Obra` en [Global.types.ts](../../src/utils/Global.types.ts).
- `ESTADO`: `"V"`/`"D"` = Vendida/Donada, `"C"` = En Galería (disponible). El diseño original pedía
  mostrar una **banda/ribbon sobre la foto** con este estado; en el código actual
  ([ArtModal.tsx](../../src/features/artSections/components/ArtModal.tsx)) solo se muestra como
  texto dentro del modal de detalle, no hay banner visual sobre la miniatura — posible mejora
  pendiente si el usuario lo pide.
- `VIDEO`: link de YouTube opcional, se muestra como botón "Ver Video" en el modal.
- Esta planilla es la fuente editorial; el sitio en runtime consume **`public/obras_full.json`**
  (no versionado en git, ver más abajo), que es una exportación/transformación de estos datos al
  formato `ObrasAño { series: Record<string, Serie> }`. No hay script en el repo que haga esa
  conversión automáticamente — hoy es un paso manual del usuario.

## Convención de nombres de archivos de fotos de obras

Todas las fotos de obras viven en `/assets/OBRAS/` (= `public/assets/OBRAS/` en local, sin
subcarpetas — ver nota de assets abajo).

- Foto principal de una obra: `{NUMERO}-001.JPEG` (ej. `0152-001.JPEG`).
- Fotos adicionales: mismo prefijo de 4 dígitos + secuencia, ej. `0002-002.JPEG`, `0002-003.JPEG`,
  no necesariamente correlativas ni con longitud fija — el diseño original dice "no todos los
  números son correlativos, buscar todo lo que empiece con esos 4 dígitos".
- **Divergencia con el código actual**: `ArtModal.tsx` (`getImagesUrl`) no hace ese matching por
  prefijo — hardcodea `${numero}-001.JPEG` a `${numero}-010.JPEG` probando 10 URLs fijas (con
  `onError` que oculta la imagen si no existe). Además tiene un bug menor: para la 10ª foto arma
  `${numero}-0010.JPEG` (con un cero de más) en vez de `${numero}-010.JPEG`, por la interpolación
  `-00${i}`. Si una obra tiene una décima foto, no va a cargar. Vale la pena tenerlo en cuenta si
  se toca esa lógica.

## Menú y navegación (según Estructura.xlsx)

El diseño original describe un menú **dirigido por planilla** (`MENU.xlsx`, con columnas `ORDEN,
MENU (botón ppal), SUBMENU, FOTO ASOCIADA, FOTO COLOR ASOCIADA, ABRIR ARCHIVO`), leído y ordenado
por `ORDEN`, agrupando por `MENU` para armar los botones principales y sus submenús.

En el código actual esto está **hardcodeado como datos estáticos** en
[links.ts](../../src/layout/components/navbar/links.ts) (`navbarLinksData`), no se lee de ninguna
planilla en runtime — mismo resultado, distinta implementación (estática en vez de dirigida por
datos).

Botones principales y su lógica:
- **Inicio** — carrusel de fotos grandes en HomePage.
- **Obras Año** — submenú por año (2018–2025, hoy también 2026 en assets nuevos pendientes de
  incorporar). `imageKey = 'Obras'`.
- **Obras Serie** — submenú por serie: Re-Cuadros, Juntos, Familias, Asombro, Amigos, Alegría.
  (Nota: la planilla de diseño también menciona una serie **"Pequeño Formato"** en el resumen de
  menú que no está en `links.ts` — posible sección pendiente de agregar.)
- **Acerca de** — sección de info con archivos (Portfolio, Storytelling, Memoria Conceptual),
  `isInfoSection: true`.
- **Exhibiciones** — submenú por año (2021-20-19 agrupados, 2022–2025).
- **Premios** — info section con un solo PDF.
- **Arte Africano** — submenú Báculos / Máscaras, cada uno con su propio PDF asociado
  (`BaculosAfricanos.pdf`, `MascarasTribales.pdf`).
- **Contacto** — info section, formulario/datos de contacto.

### Convención de imágenes de submenú

Definida en [SubmenuCarousel.tsx](../../src/features/artSections/page/SubmenuCarousel.tsx):

```
/assets/MENU/{imageKey}_{label}.JPEG   → versión blanco y negro (thumbnail base)
/assets/MENU/{imageKey}_{label}C.JPEG  → versión color (hover/highlight)
```

`imageKey` viene del botón principal (`Obras`, `Exhibiciones`, `Africano`, etc.), `label` es el
texto exacto del submenú (ej. `Báculos`, `2025`, `Re-Cuadros`).

**Cuidado al actualizar MENU**: si el usuario trae fotos nuevas con otra convención de nombres
(por ejemplo, sin el prefijo `{imageKey}_`), van a quedar rotas hasta renombrarlas o mapearlas a
este patrón. Ya pasó una vez (carpeta `MENU` nueva con `Baculos.JPEG` en vez de
`Africano_Baculos.JPEG`) — pendiente de resolver con el usuario.

También hay un bug de acentos preexistente (no introducido por nosotros): `links.ts` usa labels
con tilde (`'Báculos'`, `'Máscaras'`) que se concatenan literalmente al nombre de archivo, pero los
archivos reales no tienen tilde (`Africano_Baculos.JPEG`) — esas imágenes de submenú puntuales
probablemente nunca cargaron ni en producción.

### Secciones nuevas pendientes de incorporar (según `.claude/context/MENU.xlsx`)

El usuario marcó en **amarillo** en `MENU.xlsx` tres filas nuevas que no existen todavía en
`links.ts` ni en el sitio:

| ORDEN | MENU (botón ppal) | SUBMENU | Foto B/N | Foto color |
|---|---|---|---|---|
| 1010 | OBRAS AÑO | **2026** | `\Menu\Obras_2026.JPEG` | `\Menu\Esculturas_2026c.JPEG` |
| 1085 | OBRAS SERIE | **Invisibles** | `\Menu\Obras_Invisibles.JPEG` | `\Menu\Esculturas_InvisiblesC.JPEG` |
| 1175 | EXHIBICIONES | **2026** | `\Menu\Exhibiciones_2026.JPEG` | `\Menu\Exhibiciones_2026C.JPEG` |

Para incorporarlas hay que:
1. Agregar la entrada correspondiente a `nestedLinks` en `links.ts` (`OBRAS AÑO` → `{ label: '2026', path: '2026' }`, mismo patrón para `OBRAS SERIE → Invisibles` y `EXHIBICIONES → 2026`).
2. Conseguir/copiar a `public/assets/MENU/` las imágenes de submenú con el nombre que espera el
   código: `{imageKey}_{label}.JPEG` y `{imageKey}_{label}C.JPEG` (`imageKey` = `Obras` o
   `Exhibiciones` según corresponda — ver convención más arriba).
3. Si es "OBRAS AÑO 2026" u "OBRAS SERIE Invisibles", además hace falta que existan obras con
   `AÑO = 2026` o `SERIE = "Invisibles"` en `obras_full.json`, si no el submenú va a existir pero
   sin contenido.

**Ojo**: en `MENU.xlsx` la columna "foto color" para OBRAS AÑO usa el patrón
`Esculturas_{año}c.JPEG` (prefijo `Esculturas`, minúscula) — pero el código
(`SubmenuCarousel.tsx`) arma la URL como `{imageKey}_{label}C.JPEG`, y `imageKey` para ese botón es
`'Obras'` (ver `links.ts`), o sea espera `Obras_2026C.JPEG`, no `Esculturas_2026c.JPEG`. Antes de
copiar los assets nuevos, confirmar con el usuario o renombrar para que coincida con lo que el
código realmente busca.

## Assets: no viven en git

`public/` completo está en `.gitignore` (son cientos de MB de fotos). El flujo real:

- El usuario mantiene una carpeta de trabajo en `E:\ARTE RECICLADO RIO\WEB\` (`OBRAS/`, `MENU/`,
  `DOCUMENTOS/`, `OBRAS.xlsx`, `obras_full.json`, etc.) — su fuente editorial.
- Producción vive en un hosting (backup encontrado en `chacunart/public_html/`, también
  gitignoreado, no debe subirse — pesa >2GB entre el build y el zip original).
- Para desarrollo local, `public/` se reconstruye copiando desde esas fuentes (ver historial de
  este chat: assets, fonts, `obras_full.json`, favicons).
- Cuando el usuario trae "actualizaciones" de fotos/documentos, hay que revisar con cuidado si la
  estructura de carpetas y nombres coincide con lo que el código espera antes de copiar
  directamente — ya hubo diferencias de convención de nombres y carpetas extra de archivo/trabajo
  personal que no correspondía subir (ver sección MENU arriba).

## Flujo de git acordado con el usuario

- `main` = producción, `staging` = pruebas. Todo cambio se commitea y pushea seguido para no
  perder trabajo.
- El deploy real a producción (subir a `public_html` del hosting) es un paso manual separado del
  repo — git no lo automatiza hoy.
