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
        justifyContent: breakpoint.isMobile ? 'space-between' : 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}
    >
      <Box component={Link} to={'/'}>
        <Image
          src="/assets/ChristianAcuna-logo.jpg"
          w={breakpoint.isMobile ? 230 : 250}
          fallbackSrc="https://placehold.co/250"
        />
      </Box>
      {breakpoint.isMobile && (
        <Burger
          opened={opened}
          onClick={toggle}
          styles={{
            root: { '--burger-color': 'white' },
          }}
        />
      )}
    </Box>
  );
}
