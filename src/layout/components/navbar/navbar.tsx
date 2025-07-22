import { Box, Group, Image } from '@mantine/core';
import { navbarLinksData } from './links';
import NavbarLink from './NavbarLink';
import {
  IconBrandAdobeIllustrator,
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
} from '@tabler/icons-react';

export default function Navbar() {
  return (
    <div style={{ position: 'relative', paddingBottom: '10rem', height: '95%' }}>
      <Box
        h="15vh"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'var(--mantine-color-gray-5)',
        }}
      >
        <Image src="https://placehold.co/300x120" w={300} h={120} />
      </Box>

      <Box py={'md'}>
        {navbarLinksData.map((link) => (
          <NavbarLink key={link.label} data={link} />
        ))}
      </Box>

      <Group
        justify="space-around"
        px="xl"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <IconBrandInstagramFilled />
        <IconBrandFacebookFilled />
        <IconBrandAdobeIllustrator />
      </Group>
    </div>
  );
}
