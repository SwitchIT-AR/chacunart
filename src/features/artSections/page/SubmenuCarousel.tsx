// components/SubmenuCarousel.tsx
import { Box } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { Link } from 'react-router';
import clsx from 'clsx';
import classes from './ArtRoot.module.css';
import { useBreakpoint } from '../../../utils/utils';

interface NestedLink {
  label: string;
  path: string;
}

interface SubmenuCarouselProps {
  nestedLinks: NestedLink[];
  imageKey: string;
  compact?: boolean;
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
  compact = false,
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
      slideSize={
        compact
          ? breakpoints.isMobile
            ? '52%'
            : '18%'
          : breakpoints.isMobile
            ? '90%'
            : '70%'
      }
      slideGap={'sm'}
      height={compact ? (breakpoints.isMobile ? '210px' : '220px') : breakpoints.isMobile ? '87dvh' : '100vh'}
      emblaOptions={{
        loop: true,
        align: compact ? 'start' : 'center',
      }}
      styles={{
        root: {
          backgroundColor: 'black',
        },
      }}
    >
      {submenus.map((submenu) => (
        <Carousel.Slide key={submenu.submenuLabel}>
          <Box
            component={Link}
            to={submenu.submenuPath}
            className={clsx(classes.carouselSlide, compact && classes.carouselSlideCompact)}
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