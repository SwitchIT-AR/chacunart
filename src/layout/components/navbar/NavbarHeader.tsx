import { Box, Image } from "@mantine/core";

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
    >
      <Image src="/assets/ChristianAcuna-logo.jpg" w={250} />
    </Box>
  );
}
