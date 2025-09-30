import { Box, Text, Title } from '@mantine/core';
import { Link, useParams } from 'react-router';
import { navbarLinksData } from '../../../layout/components/navbar/links';
import ErrorScreen from '../../../errors/ErrorScreen';
import classes from './ArtRoot.module.css';
import { useEffect, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { useBreakpoint } from '../../../utils/utils';

interface Submenu {
  imagePathColor: string;
  imagePathBlack: string;
  submenuPath: string;
  submenuLabel: string;
}

export default function ArtRoot() {
  const { exibitionLabel } = useParams();
  const [selectedPdf, setSelectedPdf] = useState<{
    key: string;
    path: string;
  } | null>(null);
  const link = navbarLinksData.filter(
    (link) => link.path === `/${exibitionLabel}`,
  );
  const breakpoints = useBreakpoint();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // o 'auto' si no querés animación
  }, []);

  if (!link) {
    return (
      <ErrorScreen>
        No se pudo encontrar la informacion de este link
      </ErrorScreen>
    );
  }

  const linkData = link[0];

  if (linkData.isInfoSection && !linkData.isNested) {
    if (linkData.files.length > 1) {
      if (breakpoints.isMobile) {
        return (
          <Box component="section" p={'xl'}>
            <Box className={classes.infoButtonsContainer}>
              {linkData.files.map((nestedLink) => (
                <a
                  style={{ color: 'black', textDecoration: 'none' }}
                  href={'/assets/DOCUMENTOS/' + nestedLink.path}
                  target="_blank"
                  rel="noreferrer"
                  key={nestedLink.path}
                >
                  <Box className={classes.infoButtons}>{nestedLink.label}</Box>
                </a>
              ))}
            </Box>
          </Box>
        );
      } else {
        return (
          <Box component="section" p={'md'}>
            <Box className={classes.infoButtonsContainer}>
              {linkData.files.map((nestedLink) => (
                <Box
                  key={nestedLink.path}
                  className={classes.infoButtons}
                  onClick={() =>
                    setSelectedPdf({
                      key: nestedLink.label,
                      path: nestedLink.path,
                    })
                  }
                >
                  <Title ta={'center'}>{nestedLink.label}</Title>
                </Box>
              ))}
            </Box>
            {selectedPdf ? (
              <embed
                src={`/assets/DOCUMENTOS/${selectedPdf.path}`}
                type="application/pdf"
                width={'100%'}
                height={'800px'}
              />
            ) : (
              <Title order={2} ta={'center'} mt={'xl'}>
                Seleccione una opcion para vizualisar
              </Title>
            )}
          </Box>
        );
      }
    } else {
      return (
        <Box component="section" p={'md'}>
          <embed
            src={`/assets/DOCUMENTOS/${linkData.files[0].path}`}
            type="application/pdf"
            width={'100%'}
            height={'800px'}
          />
        </Box>
      );
    }
  }

  const submenus: Submenu[] = linkData.nestedLinks.map((submenu) => {
    return {
      imagePathColor: `/assets/MENU/${linkData.imageKey}_${submenu.label}C.JPEG`,
      imagePathBlack: `/assets/MENU/${linkData.imageKey}_${submenu.label}.JPEG`,
      submenuLabel: submenu.label,
      submenuPath: submenu.path,
    };
  });

  return (
    <Box component="section">
      <Carousel
        slideSize={submenus.length > 5 ? '33.3%' : '33.3%'}
        slideGap={'md'}
        height={'100vh'}
        emblaOptions={{
          loop: true,
          // dragFree: true,
          align: 'center',
        }}
      >
        {submenus.map((submenu) => (
          <Carousel.Slide key={submenu.submenuLabel}>
            <Box
              component={Link}
              to={submenu.submenuPath}
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Text
                style={{
                  position: 'absolute',
                  fontSize: '7rem',
                  color: 'white',
                  zIndex: 1,
                  bottom: '50%',
                  fontFamily: 'Roboto',
                }}
              >
                {submenu.submenuLabel}
              </Text>
              <img
                src={submenu.imagePathColor}
                alt={submenu.submenuLabel}
                className={classes.image}
              />
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>
      {linkData.files.length > 0 &&
        linkData.files.map((file) => (
          <Box key={file.label}>
            <embed
              src={`/assets/DOCUMENTOS/${file.path}`}
              type="application/pdf"
              width={'100%'}
              height={'800px'}
            />
          </Box>
        ))}
    </Box>
  );
}
