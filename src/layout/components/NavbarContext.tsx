import { createContext, useContext } from 'react';

interface NavbarContextValue {
  opened: boolean;
  toggle: () => void;
}

export const NavbarContext = createContext<NavbarContextValue | null>(null);

export function useNavbarContext() {
  const ctx = useContext(NavbarContext);
  if (!ctx) {
    throw new Error('useNavbarContext must be used within Layout');
  }
  return ctx;
}
