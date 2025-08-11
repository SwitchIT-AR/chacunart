import { Box, Title } from '@mantine/core';
// import LeadGrid from '../components/LeadGrid';
import { GridAsymmetrical } from '../components/AsymetricGrid';
import { useParams } from 'react-router';
import obrasDataJson from '../../../utils/obras_full.json';
import ErrorScreen from '../../../errors/ErrorScreen';
import { ObrasData } from '../../../utils/Global.types';

export default function ArtSubSectionPage() {
  const { exibitionLabel, exibitionSubLabel } = useParams();
  const obrasData: ObrasData = obrasDataJson;
  const exibitionData =
    obrasData[exibitionLabel! as keyof ObrasData].series[exibitionSubLabel!];

  if (!exibitionData) {
    return (
      <ErrorScreen>
        No se pudo encontrar la informacion de este link
      </ErrorScreen>
    );
  }

  // const leadData = exibitionData.obras.slice(0, 4);
  // const asymData = exibitionData.obras.slice(4);

  return (
    <Box component="section" py={'md'}>
      <Title ta={'center'} mb={'md'}>
        {exibitionData.label}
      </Title>
      <Box mb="md">
        {/* <LeadGrid
          mainObra={leadData[0]}
          secondObra={leadData[1]}
          thirdObra={leadData[2]}
          fourthObra={leadData[3]}
        /> */}
      </Box>
      <GridAsymmetrical
        obras={exibitionData.obras}
        // renderItem={(obra) => (
        //   <Image src={} />
        // )}
      />
    </Box>
  );
}
