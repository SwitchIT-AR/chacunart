import { Container, Grid, Image, SimpleGrid, Stack } from '@mantine/core';
import { Obra } from '../../../utils/Global.types';

const FALLBACK =
  'https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Sin%20Informacion';

interface ItemComponentProps {
  obra: Obra;
  height: string; // altura sugerida para ese slot
}

interface LeadGridProps {
  obras: Obra[];
  primaryHeight?: string; // opcional (default 520px)
  component?: React.ComponentType<ItemComponentProps>;
}

function chunk4<T>(arr: T[]) {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += 4) out.push(arr.slice(i, i + 4));
  return out;
}

export default function LeadGrid({
  obras,
  primaryHeight = '570px',
  component: ItemComponent,
}: LeadGridProps) {
  const groups = chunk4(obras);
  const SECONDARY_H = `calc(${primaryHeight} / 2 - var(--mantine-spacing-md) / 2)`;

  if (!groups.length) return null;

  const obraSrc = (o?: Obra) =>
    o ? `/assets/OBRAS/${o.numero}-001.JPEG` : undefined;

  const renderItem = (obra: Obra, height: string) => {
    if (ItemComponent) {
      return <ItemComponent obra={obra} height={height} />;
    } else {
      return <Image src={obraSrc(obra)} fallbackSrc={FALLBACK} h={height} />;
    }
  };

  return (
    <Container>
      <Stack gap="md">
        {groups.map((items, idx) => {
          const reverse = idx % 2 === 1;
          const [main, second, third, fourth] = items;
          if (!main) return null; // nada que renderizar en este bloque

          const Main = renderItem(main, primaryHeight);

          const Secondary = (
            <Grid gutter="md">
              {second && <Grid.Col>{renderItem(second, SECONDARY_H)}</Grid.Col>}
              {third && (
                <Grid.Col span={6}>{renderItem(third, SECONDARY_H)}</Grid.Col>
              )}
              {fourth && (
                <Grid.Col span={6}>{renderItem(fourth, SECONDARY_H)}</Grid.Col>
              )}
            </Grid>
          );

          return (
            <SimpleGrid key={idx} cols={{ base: 1, sm: 2 }} spacing="md">
              {reverse ? Secondary : Main}
              {reverse ? Main : Secondary}
            </SimpleGrid>
          );
        })}
      </Stack>
    </Container>
  );
}
