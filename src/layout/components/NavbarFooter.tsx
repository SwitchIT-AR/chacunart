import { Anchor, Group } from '@mantine/core';
import {
  IconBrandInstagramFilled,
  IconBrandFacebookFilled,
  IconBrandYoutubeFilled,
} from '@tabler/icons-react';

export default function NavbarFooter() {
  return (
    <Group justify="space-around" p="xl">
        <Anchor
          href="https://instagram.com/chacunart"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandInstagramFilled size={'2rem'} color="black" />
        </Anchor>
        <Anchor
          href="https://facebook.com/chacunart"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandFacebookFilled color="black" size={'2rem'} />
        </Anchor>
        <Anchor
          href="https://youtube.com/@christianacuna7842"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandYoutubeFilled color="black" size={'2rem'} />
        </Anchor>
      </Group>
  );
}
