import { Box, Title } from '@mantine/core';
import { useParams } from 'react-router';
import obrasDataJson from '../../../../public/obras_full.json';
import ErrorScreen from '../../../errors/ErrorScreen';
import { ObrasData } from '../../../utils/Global.types';
import LeadGrid from '../components/LeadGrid';
import ArtModal from '../components/ArtModal';
import { useEffect } from 'react';

export default function ArtSubSectionPage() {
  const { exibitionLabel, exibitionSubLabel } = useParams();
  const obrasData: ObrasData = obrasDataJson;
  const exibitionData =
    obrasData[exibitionLabel! as keyof ObrasData].series[exibitionSubLabel!];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // o 'auto' si no querés animación
  }, []);

  if (!exibitionData) {
    return (
      <ErrorScreen>
        No se pudo encontrar la informacion de este link
      </ErrorScreen>
    );
  }

  return (
    <Box component="section" py={'md'}>
      <Title ta={'center'} mb={'md'}>
        {exibitionData.label}
      </Title>
      <LeadGrid obras={exibitionData.obras} component={ArtModal} />
    </Box>
  );
}
