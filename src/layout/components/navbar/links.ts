export interface NavbarLinkData {
  label: string;
  path: string;
  imageKey: string;
  isNested: boolean;
  isInfoSection: boolean;
  nestedLinks: { label: string; path: string }[];
  files: { label: string; path: string }[];
}

export const navbarLinksData: NavbarLinkData[] = [
  {
    label: 'Inicio',
    path: '/',
    imageKey: 'Menu',
    isNested: false,
    isInfoSection: false,
    nestedLinks: [],
    files: [],
  },
  {
    label: 'OBRAS AÑO',
    path: '/obrasAño',
    imageKey: 'Obras',
    isNested: true,
    isInfoSection: false,
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
    files: [],
  },
  {
    label: 'OBRAS SERIE',
    path: '/obrasSerie',
    imageKey: 'Obras',
    isNested: true,
    isInfoSection: false,
    nestedLinks: [
      { label: 'Re-Cuadros', path: 'recuadros' },
      { label: 'Juntos', path: 'juntos' },
      { label: 'Familias', path: 'familias' },
      { label: 'Asombro', path: 'asombro' },
      { label: 'Amigos', path: 'amigos' },
      { label: 'Alegria', path: 'alegria' },
    ],
    files: [],
  },
  {
    label: 'ACERCA DE',
    path: '/about',
    imageKey: 'About',
    isNested: false,
    isInfoSection: true,
    nestedLinks: [
    ],
    files: [
      { label: 'Portfolio', path: 'Portfolio.pdf' },
      { label: 'Storytelling', path: 'Storytelling.pdf' },
      { label: 'Memoria Conceptual', path: 'MemoriaConceptual.pdf' },
    ],
  },
  {
    label: 'EXHIBICIONES',
    path: '/exibitions',
    imageKey: 'Exhibiciones',
    isNested: true,
    isInfoSection: false,
    nestedLinks: [
      { label: '2025', path: '2025' },
      { label: '2024', path: '2024' },
      { label: '2023', path: '2023' },
      { label: '2022', path: '2022' },
      { label: '2021-20-19', path: '2021' },
    ],
    files: [],
  },
  {
    label: 'PREMIOS',
    path: '/prices',
    imageKey: 'Premios',
    isNested: false,
    isInfoSection: true,
    nestedLinks: [    ],
    files: [{ label: 'Premios', path: 'Premios.pdf' }],
  },
  {
    label: 'ARTE AFRICANO',
    imageKey: 'Africano',
    path: '/african',
    isNested: true,
    isInfoSection: true,
    nestedLinks: [
      { label: 'Báculos', path: 'baculos' },
      { label: 'Máscaras', path: 'mascaras' },
    ],
    files: [
      { label: 'Báculos', path: 'BaculosAfricanos.pdf' },
      { label: 'Máscaras', path: 'MascarasTribales.pdf' },
    ],
  },
  {
    label: 'CONTACTO',
    path: '/contact',
    imageKey: 'Contacto',
    isNested: false,
    isInfoSection: true,
    nestedLinks: [],
    files: [],
  },
];
