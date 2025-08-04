import { Group } from '@mantine/core';
import {
  IconBrandInstagramFilled,
  IconBrandFacebookFilled,
  IconBrandAdobeIllustrator,
} from '@tabler/icons-react';

export default function NavbarFooter() {
  return (
    <Group
      justify="space-around"
      p="xl"
    >
      <IconBrandInstagramFilled color='white' />
      <IconBrandFacebookFilled color='white' />
      <IconBrandAdobeIllustrator color='white' />
    </Group>
  );
}
