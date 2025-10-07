// components/SubmenuCarousel.tsx
import { Box } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { Link } from 'react-router';
import classes from './ArtRoot.module.css';
import { useBreakpoint } from '../../../utils/utils';

interface NestedLink {
  label: string;
  path: string;
}

interface SubmenuCarouselProps {
  nestedLinks: NestedLink[];
  imageKey: string;
}

interface Submenu {
  imagePathColor: string;
  imagePathBlack: string;
  submenuLabel: string;
  submenuPath: string;
}

export default function SubmenuCarousel({
  nestedLinks,
  imageKey,
}: SubmenuCarouselProps) {
  const breakpoints = useBreakpoint();
  const submenus: Submenu[] = nestedLinks.map((submenu) => ({
    imagePathColor: `/assets/MENU/${imageKey}_${submenu.label}C.JPEG`,
    imagePathBlack: `/assets/MENU/${imageKey}_${submenu.label}.JPEG`,
    submenuLabel: submenu.label,
    submenuPath: submenu.path,
  }));

  return (
    <Carousel
      slideSize={breakpoints.isMobile ? '90%' : '70%'} // 👈 100% en mobile, 33.3% en desktop
      slideGap={breakpoints.isMobile ? 'sm' : 'sm'} // 👈 Sin gap en mobile
      height={breakpoints.isMobile ? '87dvh' : '100vh'}
      emblaOptions={{
        loop: true,
        align: 'center',
      }}
      styles={{
        root: {
          backgroundColor: 'black', // 👈 Fondo negro como en tu diseño
        },
      }}
    >
      {submenus.map((submenu) => (
        <Carousel.Slide key={submenu.submenuLabel}>
          <Box
            component={Link}
            to={submenu.submenuPath}
            className={classes.carouselSlide}
          >
            <img
              src={submenu.imagePathColor}
              alt={submenu.submenuLabel}
              className={classes.image}
            />
          </Box>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}