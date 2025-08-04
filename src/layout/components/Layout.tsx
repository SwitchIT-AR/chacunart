import { AppShell, ScrollArea } from '@mantine/core';
import { ReactNode } from 'react';
import NavbarHeader from './navbar/NavbarHeader';
import NavbarNavigation from './navbar/NavbarNavigation';
import NavbarFooter from './NavbarFooter';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AppShell navbar={{ breakpoint: 'sm', width: '320px' }}>
      <AppShell.Navbar style={{ backgroundColor: 'black' }}>
        <AppShell.Section>
          <NavbarHeader />
        </AppShell.Section>
        <AppShell.Section grow component={ScrollArea}>
          <NavbarNavigation />
        </AppShell.Section>
        <AppShell.Section>
          <NavbarFooter />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
