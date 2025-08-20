import { Image } from '@mantine/core';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
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

export default function LeadGrid({
  obras,
  primaryHeight = '570px',
  component: ItemComponent,
}: LeadGridProps) {

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
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
    >
      <Masonry>
        {
          obras.map((obra) => (
            renderItem(obra, primaryHeight)
          ))
        }
      </Masonry>
    </ResponsiveMasonry>
  );
}
