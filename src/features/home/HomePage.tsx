import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Box, Container } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef } from 'react';
import { useBreakpoint } from '../../utils/utils';

export default function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const breakpoint = useBreakpoint();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }, []);

  // helper para elegir imagen segun mobile o desktop
  const getImage = (name: string) =>
    breakpoint.isMobile ? `/assets/MENU/${name}_MOV.JPEG` : `/assets/MENU/${name}.JPEG`;

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
            style={{
              backgroundImage: `url(${getImage('Menu_01C')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
            }}
          />
        </CarouselSlide>
        <CarouselSlide>
          <Box
            style={{
              backgroundImage: `url(${getImage('Menu_02C')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
            }}
          />
        </CarouselSlide>
        <CarouselSlide>
          <Box
            style={{
              backgroundImage: `url(${getImage('Menu_03C')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
            }}
          />
        </CarouselSlide>
        <CarouselSlide>
          <Box
            style={{
              backgroundImage: `url(${getImage('Menu_04C')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
            }}
          />
        </CarouselSlide>
      </Carousel>
    </Container>
  );
}
