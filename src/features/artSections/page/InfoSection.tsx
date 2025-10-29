// components/InfoSection.tsx
import { Box, Grid, Image, Title } from '@mantine/core';
import { useState } from 'react';
import classes from './ArtRoot.module.css';

interface File {
  label: string;
  path: string;
  bgImg: string | null;
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
      <Box
        component="section"
        p="md"
        style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}
      >
        <Grid gutter="md" style={{ margin: 0 }}>
          {files.map((file) => (
            <Grid.Col key={file.path} span={12} style={{ padding: '0.5rem' }}>
              <a
                href={`/assets/DOCUMENTOS/${file.path}`}
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  display: 'block',
                  width: '100%',
                  maxWidth: '100%',
                }}
              >
                <Box className={classes.infoButtonsMobile}>
                  {file.bgImg ? (
                    <Image
                      src={`/assets/MENU/${file.bgImg}`}
                      fit="contain"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  ) : (
                    <Title order={3} ta="center">
                      {file.label}
                    </Title>
                  )}
                </Box>
              </a>
            </Grid.Col>
          ))}
        </Grid>
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
            {file.bgImg ? (
              <Image src={`/assets/MENU/${file.bgImg}`} fit="contain" />
            ) : (
              <Title order={3} ta="center">
                {file.label}
              </Title>
            )}
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
