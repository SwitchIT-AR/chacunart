import { Carousel, CarouselSlide } from '@mantine/carousel';
import { ActionIcon, Box, Container, Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useBreakpoint } from '../../utils/utils';
import { useNavbarContext } from '../../layout/components/NavbarContext';
import DocumentArticle from '../documents/DocumentArticle';
import { storytelling } from '../documents/documentsContent';
import classes from './Home.module.css';

interface HeroSlide {
  image: string;
  position: 'top' | 'bottom';
  title: string;
  subtitle?: string[];
}

const heroSlides: HeroSlide[] = [
  {
    image: 'Menu_01C',
    position: 'bottom',
    title: 'Lo que el río no quiso',
    subtitle: ['Maderas flotantes del Río de la Plata'],
  },
  {
    image: 'Menu_02C',
    position: 'top',
    title: 'Esperanza a la deriva',
    subtitle: ['1er Premio 90° Salón de Otoño SAAP', 'Sociedad Argentina de Artistas Plásticos'],
  },
  {
    image: 'Menu_03C',
    position: 'top',
    title: 'Otra Oportunidad',
  },
  {
    image: 'Menu_04C',
    position: 'top',
    title: 'La Fábrica',
  },
];

export default function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const breakpoint = useBreakpoint();
  const [storyOpened, { open: openStory, close: closeStory }] = useDisclosure(false);
  const { toggle: toggleMenu } = useNavbarContext();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // helper para elegir imagen segun mobile o desktop
  const getImage = (name: string) =>
    breakpoint.isMobile
      ? `/assets/MENU/${name}_MOV.JPEG`
      : `/assets/MENU/${name}.JPEG`;

  return (
    <>
      <Container
        component="section"
        style={{
          height: breakpoint.isMobile ? '86dvh' : '100dvh',
          display: 'flex',
          padding: 0,
          position: 'relative',
        }}
        fluid
      >
        {breakpoint.isMobile && (
          <button type="button" className={classes.menuFab} onClick={toggleMenu}>
            <IconMenu2 size={'1rem'} />
            <span>Menú</span>
          </button>
        )}
        <Carousel
          withIndicators
          orientation="vertical"
          height="100%"
          flex={1}
          plugins={[autoplay.current]}
          emblaOptions={{ duration: 75 }}
          styles={{ control: { display: 'none' } }}
        >
          {heroSlides.map((slide) => (
            <CarouselSlide key={slide.image}>
              <Box
                className={classes.imgContainer}
                style={{ backgroundImage: `url(${getImage(slide.image)})` }}
              >
                <Box
                  className={clsx(
                    classes.heroOverlay,
                    slide.position === 'top' ? classes.heroOverlayTop : classes.heroOverlayBottom,
                  )}
                >
                  <Text className={classes.title}>{slide.title}</Text>
                  {slide.subtitle?.map((line, i) => (
                    <Text key={i} className={i === 0 ? classes.subtitle : classes.description}>
                      {line}
                    </Text>
                  ))}
                </Box>
              </Box>
            </CarouselSlide>
          ))}
          <CarouselSlide>
            <Box className={classes.storySlide}>
              <Text className={classes.storyQuote}>
                “Todo empezó a los once años, a orillas de un río en Córdoba, viendo a mi tío darle
                vida a una rama con una navaja. Verano tras verano, aprendí a hacer lo mismo.”
              </Text>
              <button type="button" className={classes.storyButton} onClick={openStory}>
                Continuar leyendo
              </button>
            </Box>
          </CarouselSlide>
        </Carousel>
      </Container>

      <Modal opened={storyOpened} onClose={closeStory} withCloseButton={false} size={'100%'}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ActionIcon variant="light" color="yellow" size={'md'} onClick={closeStory}>
            <IconX />
          </ActionIcon>
        </div>
        <DocumentArticle content={storytelling} />
      </Modal>
    </>
  );
}
