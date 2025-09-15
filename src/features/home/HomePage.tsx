import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Box, Container } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef } from 'react';
import { useBreakpoint } from '../../utils/utils';

export default function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const breakpoint = useBreakpoint();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // o 'auto' si no querés animación
  }, []);

  return (
    <Container
      component={'section'}
      style={{ height: breakpoint.isMobile ? '86dvh' : '100dvh', display: 'flex', padding: 0 }}
      fluid
    >
      <Carousel
        withIndicators
        orientation="vertical"
        height={'100%'}
        flex={1}
        plugins={[autoplay.current]}
        emblaOptions={{ duration: 75 }}
        styles={{ control: { display: 'none' } }}
      >
        <CarouselSlide>
          <Box
            style={{
              backgroundImage: 'url(/assets/MENU/Menu_01C.JPEG)',
              backgroundSize: 'fill',
              // backgroundPosition: breakpoint.isMobile ? 'left' : 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
            }}
          />
        </CarouselSlide>
        <CarouselSlide>
          <Box
            style={{
              backgroundImage: 'url(/assets/MENU/Menu_02C.JPEG)',
              backgroundSize: 'fill',
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
              backgroundImage: 'url(/assets/MENU/Menu_03C.JPEG)',
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
              backgroundImage: 'url(/assets/MENU/Menu_04C.JPEG)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
            }}
          />
        </CarouselSlide>

        {/* <img src={'/assets/MENU/Menu_01C.JPEG'} style={{  width: 'auto', objectFit: 'contain' }} /> */}
        {/* <CarouselSlide>
            <Image src={'/assets/MENU/Menu_02C.JPEG'} />
          </CarouselSlide>
          <CarouselSlide>
            <Image src={'/assets/MENU/Menu_03C.JPEG'} />
          </CarouselSlide>
          <CarouselSlide>
            <Image src={'/assets/MENU/Menu_04C.JPEG'} />
          </CarouselSlide> */}
      </Carousel>
      {/* )} */}
    </Container>
  );
}
