export interface NavbarLinkData {
  label: string;
  path: string;
  // icon: Icon;
  imageKey: string;
  isNested: boolean;
  nestedLinks: { label: string; path: string }[];
}

export const navbarLinksData: NavbarLinkData[] = [
  {
    label: 'Inicio',
    path: '/',
    imageKey: 'Menu',
    isNested: false,
    nestedLinks: [],
  },
  {
    label: 'OBRAS AÑO',
    path: '/obrasAño',
    imageKey: 'Obras',
    isNested: true,
    nestedLinks: [
      { label: '2025', path: '2025' },
      { label: '2024', path: '2024' },
      { label: '2023', path: '2023' },
      { label: '2022', path: '2022' },
      { label: '2021', path: '2021' },
      { label: '2020', path: '2020' },
      { label: '2019', path: '2019' },
      { label: '2018', path: '2018' },
    ],
  },
  {
    label: 'OBRAS SERIE',
    path: '/obrasSerie',
    imageKey: 'Obras',
    isNested: true,
    nestedLinks: [
      { label: 'Re-Cuadros', path: 'recuadros' },
      { label: 'Juntos', path: 'juntos' },
      { label: 'Familias', path: 'familias' },
      { label: 'Asombro', path: 'asombro' },
      { label: 'Amigos', path: 'amigos' },
      { label: 'Alegria', path: 'alegria' },
    ],
  },
  {
    label: 'ACERCA DE',
    path: '/about',
    imageKey: 'About',
    isNested: false,
    nestedLinks: [
      { label: 'Portfolio', path: 'recuadros' },
      { label: 'Storytelling', path: 'juntos' },
      { label: 'Memoria Conceptual', path: 'familia' },
    ],
  },
  {
    label: 'EXHIBICIONES',
    path: '/exibitions',
    imageKey: 'Exhibiciones',
    isNested: true,
    nestedLinks: [
      { label: '2025', path: '2025' },
      { label: '2024', path: '2024' },
      { label: '2023', path: '2023' },
      { label: '2022', path: '2022' },
      { label: '2021-20-19', path: '2021' },
    ],
  },
  {
    label: 'PREMIOS',
    path: '/prices',
    imageKey: 'Premios',
    isNested: false,
    nestedLinks: [],
  },
  {
    label: 'ARTE AFRICANO',
    imageKey: 'Africano',
    path: '/african',
    isNested: true,
    nestedLinks: [
      { label: 'Báculos', path: 'baculos' },
      { label: 'Máscaras', path: 'masks' },
    ],
  },
  {
    label: 'CONTACTO',
    path: '/contact',
    imageKey: 'Contacto',
    isNested: false,
    nestedLinks: [],
  },
];
