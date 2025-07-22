import { AppShell } from "@mantine/core";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AppShell>
      <AppShell.Navbar>

      </AppShell.Navbar>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}