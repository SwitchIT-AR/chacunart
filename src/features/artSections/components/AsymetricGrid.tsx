// GridAsymmetrical.tsx
import { Box, Container, Grid, Image, Paper } from '@mantine/core';
import { Obra } from '../../../utils/Global.types';
import { ASYM_PATTERN_XS, getAsymSpans } from '../utils/artSectionUtils';

interface AsymPhotoGridProps {
  obras: Obra[];
  pattern?: readonly number[];
  base?: number;
  radius?: string | number;
  withBlurFill?: boolean;
}

const TILE_H = 'clamp(220px, 32vw, 520px)'; // altura uniforme y responsiva

export function GridAsymmetrical({
  obras,
  pattern = ASYM_PATTERN_XS,
  base = 12,
  radius = 'md',
  withBlurFill = true,
}: AsymPhotoGridProps) {
  const spans = getAsymSpans(obras.length, base, pattern);

  return (
    <Container>
      <Grid>
        {obras.map((p, i) => (
          <Grid.Col key={i} span={{ base: spans[i].base, xs: spans[i].xs }}>
            <Paper
              radius={radius}
              withBorder
              style={{
                position: 'relative',
                width: '100%',
                height: TILE_H,          // <<< altura fija/responsiva
                overflow: 'hidden',
                background: 'var(--mantine-color-dark-6)',
              }}
            >
              {withBlurFill && (
                <Box
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(/assets/OBRAS/${p.numero}-001.JPEG)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(16px) brightness(0.85)',
                    transform: 'scale(1.08)',
                    zIndex: 0,
                    pointerEvents: 'none',
                  }}
                />
              )}

              {/* Imagen principal SIN recorte */}
              <Image
                src={`/assets/OBRAS/${p.numero}-001.JPEG`}
                alt={p.nombre ?? ''}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',   // <<< no pierde nada
                  display: 'block',
                }}
                loading="lazy"
                fallbackSrc='https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Sin%20Informacion'
              />
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
