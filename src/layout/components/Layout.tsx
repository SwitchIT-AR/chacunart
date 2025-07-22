import { AppShell } from "@mantine/core";
import { ReactNode } from "react";
import Navbar from "./navbar/navbar";

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AppShell navbar={{ breakpoint: 'sm', width: '250px' }}>
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}