import { Box } from "@mantine/core";
import { useEffect } from "react";
import { Outlet } from "react-router";

export default function Root() {
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // o 'auto' si no querés animación
}, []);

  return (
    <Box>
      <Outlet />
    </Box>
  )
}