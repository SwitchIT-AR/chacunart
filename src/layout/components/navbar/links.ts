import { Icon, IconArtboard, IconBook, IconDeviceTv, IconHome } from '@tabler/icons-react';

export interface NavbarLinkData {
  label: string;
  path: string;
  icon: Icon;
  isNested: boolean;
  nestedLinks: { label: string; path: string }[];
}

export const navbarLinksData: NavbarLinkData[] = [
  {
    label: 'Inicio',
    path: '/',
    icon: IconHome,
    isNested: false,
    nestedLinks: [],
  },
  {
    label: 'Trabajos',
    path: '/works',
    icon: IconArtboard,
    isNested: true,
    nestedLinks: [{ label: 'Esculturas Serie I', path: 'sculpsI' },
      { label: 'Esculturas Serie II', path: 'sculpsII' },
      { label: 'Esculturas Serie III', path: 'sculpsIII' },
      { label: 'Esculturas Serie IV', path: 'sculpsIV' },
      { label: 'Muestras y Exposiciones', path: 'expos' },
      { label: 'Mascaras Africanas', path: 'africanMasks' },
      { label: 'Cetros Africanos', path: 'africanScepter' },
    ],
  },
  {
    label: 'Biografia',
    path: '/biography',
    icon: IconBook,
    isNested: false,
    nestedLinks: [],
  },
  {
    label: 'Presentación',
    path: '/presentation',
    icon: IconDeviceTv,
    isNested: false,
    nestedLinks: [],
  },
  {
    label: 'Storytelling',
    path: '/storytelling',
    icon: IconBook,
    isNested: false,
    nestedLinks: [],
  },
];
