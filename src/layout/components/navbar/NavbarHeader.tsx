import { Box, Image } from "@mantine/core";
import { Link } from "react-router";

export default function NavbarHeader() {
  return (
    <Box
      p={'xl'}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}
      component={Link}
      to={'/'}
    >
      <Image src="/assets/ChristianAcuna-logo.jpg" w={250} fallbackSrc="https://placehold.co/250" />
    </Box>
  );
}
