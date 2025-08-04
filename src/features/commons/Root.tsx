import { Box } from "@mantine/core";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <Box>
      <Outlet />
    </Box>
  )
}