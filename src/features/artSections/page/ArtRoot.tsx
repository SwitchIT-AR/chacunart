// ArtRoot.tsx
import { Box } from '@mantine/core';
import { useParams } from 'react-router';
import { navbarLinksData } from '../../../layout/components/navbar/links';
import ErrorScreen from '../../../errors/ErrorScreen';
import { useEffect } from 'react';
import { useBreakpoint } from '../../../utils/utils';

import InfoSection from './InfoSection';
import SubmenuCarousel from './SubmenuCarousel';
import PdfViewer from './PdfViewer';

export default function ArtRoot() {
  const { exibitionLabel } = useParams();
  const breakpoints = useBreakpoint();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const link = navbarLinksData.find((link) => link.path === `/${exibitionLabel}`);

  if (!link) {
    return (
      <ErrorScreen>
        No se pudo encontrar la información de este link
      </ErrorScreen>
    );
  }

  // Info section con múltiples archivos
  if (link.isInfoSection && !link.isNested) {
    return <InfoSection files={link.files} isMobile={breakpoints.isMobile} />;
  }

  // Sección con submenús (carousel)
  return (
    <Box component="section">
      <SubmenuCarousel 
        nestedLinks={link.nestedLinks}
        imageKey={link.imageKey}
      />
      {link.files.length > 0 && (
        <PdfViewer files={link.files} />
      )}
    </Box>
  );
}