import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function useBreakpoint() {
  const theme = useMantineTheme();

  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);
  const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const isLaptop = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  const isDesktop = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);
  const isDesktopLarge = useMediaQuery(`(min-width: ${theme.breakpoints.xl})`);

  return { isMobile, isTablet, isLaptop, isDesktop, isDesktopLarge };
}

export function encodeSpaces(text: string): string {
  return text.replace(/ /g, "%20");
}
