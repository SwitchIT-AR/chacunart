import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Box, Container, Text } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef } from 'react';
import { useBreakpoint } from '../../utils/utils';
import clsx from 'clsx';
import classes from './Home.module.css';

export default function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const breakpoint = useBreakpoint();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // helper para elegir imagen segun mobile o desktop
  const getImage = (name: string) =>
    breakpoint.isMobile
      ? `/assets/MENU/${name}_MOV.JPEG`
      : `/assets/MENU/${name}.JPEG`;

  return (
    <Container
      component="section"
      style={{
        height: breakpoint.isMobile ? '86dvh' : '100dvh',
        display: 'flex',
        padding: 0,
      }}
      fluid
    >
      <Carousel
        withIndicators
        orientation="vertical"
        height="100%"
        flex={1}
        plugins={[autoplay.current]}
        emblaOptions={{ duration: 75 }}
        styles={{ control: { display: 'none' } }}
      >
        <CarouselSlide>
            <Box
              className={clsx(classes.imgContainer)}
              style={{
                backgroundImage: `url(${getImage('Menu_01C')})`,
              }}
            >
              <Box
                style={{
                  zIndex: 2,
                  justifyContent: 'center',
                  WebkitJustifyContent: 'end',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
                  paddingBottom: 'var(--mantine-spacing-md)',
                  color: 'white',
                }}
              >
                <Text size='62px' mb={'sm'} lts={'0.2rem'} fw={'900'}>Lo que el Río no quiso</Text>
                <Text size='32px'>
                  Maderas flotantes del Río de la Plata
                </Text>
              </Box>
            </Box>
        </CarouselSlide>
        <CarouselSlide>
          <Box
            p={{ base: 'md', sm: 'xl', md: 70 }}
            className={classes.imgContainer}
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),url(${getImage('Menu_01C')})`,
            }}
          >
            <Box
              style={{
                zIndex: 2,
                color: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'space-between',
                height: '100%',
              }}
            >
              <Text className={classes.title}>Lo que el Río no quiso</Text>
              <Text className={classes.subtitle}>
                Maderas flotantes del Río de la Plata
              </Text>
              <Text className={classes.description}>
                En la intersección entre el descarte y la memoria, surge esta
                serie de esculturas. Sus materiales son los testimonios
                silenciosos que el Río de la Plata arrastra y deposita: maderas
                gastadas por la corriente, troncos de historias desconocidas,
                ramas y metales que han completado un ciclo.
              </Text>
              <Text className={classes.description}>
                Mi labor no es imponer una forma, sino escuchar la que ya habita
                en ellos. Es una colaboración íntima con la materia, donde cada
                pieza me susurra la entidad que anhela devenir. El proceso
                creativo, con sus angustias y tensiones, no busca pulir su
                crudeza original, sino atravesarla para revelar la belleza
                latente en su renacimiento.
              </Text>
              <Text className={classes.description}>
                Estas obras son, en esencia, un acto de atención. Hablan de la
                transformación que ocurre cuando algo o alguien es visto,
                apreciado y liberado en toda su capacidad de expresión. Es mi
                deseo compartir con quien las vea, y sienta su llamado, la
                historia que cada una de ellas tiene para contarnos: los invito
                a escuchar el relato de lo que el Río no quiso.
              </Text>
            </Box>
          </Box>
        </CarouselSlide>
        <CarouselSlide>
          <Box
            className={classes.imgContainer}
            style={{
              backgroundImage: `url(${getImage('Menu_02C')})`,
            }}
          />
        </CarouselSlide>
        <CarouselSlide>
          <Box
            className={classes.imgContainer}
            style={{
              backgroundImage: `url(${getImage('Menu_03C')})`,
            }}
          />
        </CarouselSlide>
        <CarouselSlide>
          <Box
            className={classes.imgContainer}
            style={{
              backgroundImage: `url(${getImage('Menu_04C')})`,
            }}
          />
        </CarouselSlide>
      </Carousel>
    </Container>
  );
}
