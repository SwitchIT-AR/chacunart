import { AppShell, ScrollArea } from '@mantine/core';
import { ReactNode } from 'react';
import NavbarHeader from './navbar/NavbarHeader';
import NavbarNavigation from './navbar/NavbarNavigation';
import NavbarFooter from './NavbarFooter';
import { useDisclosure } from '@mantine/hooks';
import { useBreakpoint } from '../../utils/utils';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [opened, { toggle }] = useDisclosure();
  const breakpoint = useBreakpoint();
  return (
    <AppShell
      navbar={{
        breakpoint: 'sm',
        width: '320px',
        collapsed: { mobile: !opened },
      }}
      header={{ height: breakpoint.isMobile ? '12.5dvh' : 0 }}
    >
      {
        breakpoint.isMobile && (
          <AppShell.Header>
            <NavbarHeader opened={opened} toggle={toggle} />
          </AppShell.Header>
        )
      }
      <AppShell.Navbar style={{ backgroundColor: 'white' }}>
        {
          !breakpoint.isMobile && (
          <AppShell.Section>
            <NavbarHeader opened={opened} toggle={toggle} />
          </AppShell.Section>
          )
        }
        <AppShell.Section grow component={ScrollArea}>
          <NavbarNavigation toggle={toggle} />
        </AppShell.Section>
        <AppShell.Section>
          <NavbarFooter />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main bg={'white'}>{children}</AppShell.Main>
    </AppShell>
  );
}
