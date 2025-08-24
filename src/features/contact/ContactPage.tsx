import { Anchor, Box, Group, Text, Title } from '@mantine/core';
import { IconAt, IconBrandWhatsapp } from '@tabler/icons-react';
import { encodeSpaces } from '../../utils/utils';

export default function ContactPage() {
  const whappNumber = 123456667;
  const text = encodeSpaces('Hola! Me gustaria ponerme en contacto contigo para saber mas sobre tus obras.')
  return (
    <Box component="section" p={'md'}>
      <Title mb={'md'} order={1}>
        Contacto
      </Title>
      <Anchor
        href={`https://wa.me/${whappNumber}?text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Group mb={'sm'}>
          <IconBrandWhatsapp color="green" />
          <Text>Hablemos sobre arte</Text>
        </Group>
      </Anchor>
      <Group>
        <IconAt />
        <Text>chacuna@email.com</Text>
      </Group>
    </Box>
  );
}
