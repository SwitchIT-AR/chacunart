import {
  Stack,
} from '@mantine/core';
import { navbarLinksData } from './links';
import NavbarLink from './NavbarLink';

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

export default function NavbarNavigation() {

  return (
      <Stack ta={'center'}>
        {
          navbarLinksData.map((navbarLink) => (
            <NavbarLink key={navbarLink.path} data={navbarLink} />
          ))
        }
      </Stack>
  );
}
