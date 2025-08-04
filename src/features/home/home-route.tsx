import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Container, Group, Text } from '@mantine/core';
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
            <Group bg={'var(--mantine-color-titles-9)'} justify="center" align="center" h={'100%'}>
              <Text size={'22px'} c={'white'}>Image 1</Text>
            </Group>
          </CarouselSlide>
          <CarouselSlide>
            <Group bg={'var(--mantine-color-titles-9)'} justify="center" align="center" h={'100%'}>
              <Text size={'22px'} c={'white'}>Image 2</Text>
            </Group>
          </CarouselSlide>
          <CarouselSlide>
            <Group bg={'var(--mantine-color-titles-9)'} justify="center" align="center" h={'100%'}>
              <Text size={'22px'} c={'white'}>Image 3</Text>
            </Group>
          </CarouselSlide>
        </Carousel>
      {/* )} */}
    </Container>
  );
}
