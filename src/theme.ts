// theme.ts
import { createTheme, MantineColorsTuple } from '@mantine/core';

const titles: MantineColorsTuple = [
  '#fbf5ec',
  '#eee9e0',
  '#c9a24d',
  '#c7b69f',
  '#b6a082',
  '#ab936e',
  '#a78b64',
  '#927852',
  '#886f4a',
  '#725b38'
];

export const theme = createTheme({
  colors: {
    titles: titles
  },
  fontFamily: "Calibri, Carlito, 'Segoe UI', Arial, sans-serif",
  headings: {
    fontFamily: 'Montserrat, sans-serif',
  },
  other: {
    fontBalthazar: 'Balthazar, serif',
    fontLato: 'Lato, sans-serif',
    fontMontserrat: 'Montserrat, sans-serif',
    fontGaramond: "'EB Garamond', Georgia, serif",
    fontCinzel: "'Cinzel', Georgia, serif",
    fontCalibri: "Calibri, Carlito, 'Segoe UI', Arial, sans-serif",
  }
});