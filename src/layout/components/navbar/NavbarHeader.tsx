import { Box, Burger, Image } from '@mantine/core';
import { Link } from 'react-router';
import { useBreakpoint } from '../../../utils/utils';

interface NavbarHeaderProps {
  toggle: () => void;
  opened: boolean;
}

export default function NavbarHeader({ toggle, opened }: NavbarHeaderProps) {
  const breakpoint = useBreakpoint();
  return (
    <Box
      h={'100%'}
      px={'xl'}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box component={Link} to={'/'} h={breakpoint.isMobile ? '80%' : 'auto'}>
        <Image
          src="/assets/ChristianAcuna-logo.jpg"
          h={breakpoint.isMobile ? '100%' : undefined}
          w={breakpoint.isMobile ? 'auto' : 300}
          fit="contain"
          fallbackSrc="https://placehold.co/250"
        />
      </Box>
      {breakpoint.isMobile && (
        <Burger
          opened={opened}
          onClick={toggle}
          styles={{
            root: {
              '--burger-color': 'white',
              position: 'absolute',
              right: 'var(--mantine-spacing-xl)',
              top: '50%',
              transform: 'translateY(-50%)',
            },
          }}
        />
      )}
    </Box>
  );
}
