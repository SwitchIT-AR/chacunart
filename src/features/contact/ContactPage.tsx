import { Anchor, Container, Group, Paper, Title } from '@mantine/core';
import {
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandWhatsapp,
  IconBrandYoutubeFilled,
  IconMail
} from '@tabler/icons-react';
import { encodeSpaces } from '../../utils/utils';

export default function ContactPage() {
  const whappNumber = '+5491141881927';
  const text1 = encodeSpaces(
    'Hola Christan! Quiero conocer los precios de las obras',
  );
  const text2 = encodeSpaces(
    'Hola Christan! ¿Por donde puedo pasar a ver las obras?',
  );
  return (
    <Container component="section" p={'md'}>
      <Title mb={'calc(var(--mantine-spacing-md) *4)'} order={1} ta={'center'} size={'3rem'}>
        Contacto
      </Title>
      <Paper p={'lg'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }} mb={'lg'}>
        <Anchor
          href={`https://wa.me/${whappNumber}?text=${text1}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', fontWeight: 600, fontSize: '1.5rem'}}
        >
          Quiero conocer los precios de las obras
        </Anchor>
        <IconBrandWhatsapp color="white" size={'2rem'} />
      </Paper>
      <Paper p={'lg'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }} mb={'lg'}>
        <Anchor
          href={`https://wa.me/${whappNumber}?text=${text2}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', fontWeight: 600, fontSize: '1.5rem'}}
        >
          ¿Por donde puedo pasar a ver las obras?
        </Anchor>
        <IconBrandWhatsapp color="white" size={'2rem'} />
      </Paper>
            <Paper p={'lg'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }} mb={'lg'}>
        <Anchor
          href={`mailto:chacunart@gmail.com`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', fontWeight: 600, fontSize: '1.5rem'}}
        >
          Escribime a chacunart@gmail.com
        </Anchor>
        <IconMail color="white" size={'2rem'} />
      </Paper>
      <Group justify="space-around" p="xl">
        <Anchor
          href="https://instagram.com/chacunart"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandInstagramFilled size={'2rem'} color="white" />
        </Anchor>
        <Anchor
          href="https://facebook.com/chacunart"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandFacebookFilled color="white" size={'2rem'} />
        </Anchor>
        <Anchor
          href="https://youtube.com/@christianacuna7842"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandYoutubeFilled color="white" size={'2rem'} />
        </Anchor>
      </Group>
    </Container>
  );
}
