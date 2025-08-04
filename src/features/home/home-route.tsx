import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Alert, Container, Group, Loader } from '@mantine/core';
import { useArtSheetData } from '../../api/sheets';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

export default function HomePage() {
  const homeImages = useArtSheetData('Menu');
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Container
      component={'section'}
      style={{ height: '100vh', display: 'flex', padding: 0 }}
      fluid
    >
      {homeImages.isLoading && (
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Loader />
        </div>
      )}
      {
        homeImages.isError && (
          <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Alert title='Oops... ha ocurrido un error' color='red'>{homeImages.error.message}</Alert>
        </div>
        )
      }
      {homeImages.isSuccess && (
        <Carousel
          withIndicators
          orientation="vertical"
          height={'100%'}
          flex={1}
          plugins={[autoplay.current]}
          emblaOptions={{ duration: 75 }}
          styles={{ control: { display: 'none' } }}
        >
          {
            homeImages.data.map((element) => (
            <CarouselSlide key={element.nombre}>
              <Group bg={'blue'} justify="center" align="center" h={'100%'}>
                {element.nombre}
              </Group>
            </CarouselSlide>
            ))
          }
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
      )}
    </Container>
  );
}
