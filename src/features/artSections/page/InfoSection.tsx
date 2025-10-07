// components/InfoSection.tsx
import { Box, Title } from '@mantine/core';
import { useState } from 'react';
import classes from './ArtRoot.module.css';

interface File {
  label: string;
  path: string;
}

interface InfoSectionProps {
  files: File[];
  isMobile: boolean;
}

export default function InfoSection({ files, isMobile }: InfoSectionProps) {
  const [selectedPdf, setSelectedPdf] = useState<File | null>(null);

  // Un solo archivo - mostrar directamente
  if (files.length === 1) {
    return (
      <Box component="section" p="md">
        <embed
          src={`/assets/DOCUMENTOS/${files[0].path}`}
          type="application/pdf"
          width="100%"
          height="800px"
        />
      </Box>
    );
  }

  // Múltiples archivos en mobile - mostrar como links
  if (isMobile) {
    return (
      <Box component="section" p="xl">
        <Box className={classes.infoButtonsContainer}>
          {files.map((file) => (
            <a
              key={file.path}
              href={`/assets/DOCUMENTOS/${file.path}`}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'black', textDecoration: 'none' }}
            >
              <Box className={classes.infoButtons}>
                <Title order={3} ta="center">{file.label}</Title>
              </Box>
            </a>
          ))}
        </Box>
      </Box>
    );
  }

  // Múltiples archivos en desktop - selector + visor
  return (
    <Box component="section" p="md">
      <Box className={classes.infoButtonsContainer}>
        {files.map((file) => (
          <Box
            key={file.path}
            className={classes.infoButtons}
            onClick={() => setSelectedPdf(file)}
          >
            <Title order={3} ta="center">{file.label}</Title>
          </Box>
        ))}
      </Box>
      {selectedPdf ? (
        <embed
          src={`/assets/DOCUMENTOS/${selectedPdf.path}`}
          type="application/pdf"
          width="100%"
          height="800px"
        />
      ) : (
        <Title order={2} ta="center" mt="xl">
          Seleccione una opción para visualizar
        </Title>
      )}
    </Box>
  );
}