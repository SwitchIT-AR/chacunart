import { Box, Group, Text, Title } from "@mantine/core";
import { IconAt, IconBrandWhatsapp } from "@tabler/icons-react";

export default function ContactPage() {
  return (
    <Box component="section" p={'md'}>
      <Title mb={'md'} order={1}>Contacto</Title>
      <Group mb={'sm'}>
        <IconBrandWhatsapp color="green" />
        <Text>1123456789</Text>
      </Group>
      <Group>
        <IconAt />
        <Text>chacuna@email.com</Text>
      </Group>
    </Box>
  )
}