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

interface NavbarNavigationProps {
  toggle: () => void;
}

export default function NavbarNavigation({ toggle }: NavbarNavigationProps) {

  return (
      <Stack ta={'center'} py={'xl'}>
        {
          navbarLinksData.map((navbarLink) => (
            <NavbarLink key={navbarLink.path} data={navbarLink} toggleNavbar={toggle} />
          ))
        }
      </Stack>
  );
}
