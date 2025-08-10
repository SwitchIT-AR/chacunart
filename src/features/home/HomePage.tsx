import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Container, Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

export default function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Container
      component={'section'}
      style={{ height: '100vh', display: 'flex', padding: 0 }}
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
            <Image src={'/assets/MENU/Menu_01C.JPEG'} />
          </CarouselSlide>
          <CarouselSlide>
            <Image src={'/assets/MENU/Menu_02C.JPEG'} />
          </CarouselSlide>
          <CarouselSlide>
            <Image src={'/assets/MENU/Menu_03C.JPEG'} />
          </CarouselSlide>
          <CarouselSlide>
            <Image src={'/assets/MENU/Menu_04C.JPEG'} />
          </CarouselSlide>
        </Carousel>
      {/* )} */}
    </Container>
  );
}
