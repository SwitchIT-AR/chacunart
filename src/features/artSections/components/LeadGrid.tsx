import { Container, Grid, Image, SimpleGrid } from '@mantine/core';
import { Obra } from '../../../utils/Global.types';

const PRIMARY_COL_HEIGHT = '520px';

interface LeadGridProps {
  mainObra: Obra;
  secondObra: Obra;
  thirdObra: Obra;
  fourthObra: Obra;
}

export default function LeadGrid({ mainObra, secondObra, thirdObra, fourthObra}: LeadGridProps) {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Image src={`/assets/OBRAS/${mainObra.numero}-001.JPEG`} h={PRIMARY_COL_HEIGHT} fallbackSrc='https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Sin%20Informacion' />
        <Grid gutter="md">
          <Grid.Col>
            <Image src={`/assets/OBRAS/${secondObra.numero}-001.JPEG`} h={SECONDARY_COL_HEIGHT} fallbackSrc='https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Sin%20Informacion' />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image src={`/assets/OBRAS/${thirdObra.numero}-001.JPEG`} h={SECONDARY_COL_HEIGHT} fallbackSrc='https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Sin%20Informacion' />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image src={`/assets/OBRAS/${fourthObra.numero}-001.JPEG`} h={SECONDARY_COL_HEIGHT} fallbackSrc='https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Sin%20Informacion' />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}