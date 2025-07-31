import {
  Box,
  Group,
  Image,
} from '@mantine/core';
import {
  IconBrandAdobeIllustrator,
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
} from '@tabler/icons-react';
import { useArtSheetData } from '../../../api/sheets';
import NewNavLink from './NewNavLink';

export interface ParsedMenuItem {
  label: string;
  content: {
    orden: string;
    menu: string;
    submenu: string;
    pictureBlack: string;
    pictureColour: string;
  }[];
}

export default function Navbar() {
  const menu = useArtSheetData('Menu');

  const links: ParsedMenuItem[] = menu.data
    ? menu.data.map((item) => {
        const label = Object.keys(item)[0]; // ejemplo: "OBRAS AÑO"
        const content = item[label]; // el array de objetos
        return {
          label,
          content,
        };
      })
    : [];

  console.log(links);

  return (
    <div style={{ position: 'relative', paddingBottom: '10rem', minHeight: '98vh' }}>
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
        {links.map((link) => (
          <NewNavLink key={link.label} data={link} />
        )
      )}
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
