import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Container, Group } from '@mantine/core';
import {
  IconChevronDown,
  IconChevronUp,
} from '@tabler/icons-react';

export default function HomePage() {
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
        nextControlIcon={<IconChevronDown />}
        previousControlIcon={<IconChevronUp />}
        styles={{ control: { display: 'none' } }}
      >
        <CarouselSlide>
          <Group bg={'blue'} justify="center" align="center" h={'100%'}>
            1
          </Group>
        </CarouselSlide>
        <CarouselSlide>
          <Group bg={'blue'} justify="center" align="center" h={'100%'}>
            2
          </Group>
        </CarouselSlide>
        <CarouselSlide>
          <Group bg={'blue'} justify="center" align="center" h={'100%'}>
            3
          </Group>
        </CarouselSlide>
      </Carousel>
    </Container>
  );
}
