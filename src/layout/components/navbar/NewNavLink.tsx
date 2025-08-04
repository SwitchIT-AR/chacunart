import { Box, Collapse, NavLink, Stack } from '@mantine/core';
import { useNavigate } from 'react-router';
import { ParsedMenuItem } from './NavbarNavigation';
import { useDisclosure } from '@mantine/hooks';

interface NewNavLinkProps {
  data: ParsedMenuItem;
}

export default function NewNavLink({ data }: NewNavLinkProps) {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

  const label = data.label;
  const href = label.toLowerCase().replace(/\s/g, '');

  const handleNavigate = () => navigate(href);

  if (data.content.length > 1) {
    return (
      <Box
        key={label}
        onMouseEnter={open}
        onMouseLeave={close}
      >
        <NavLink
          label={label}
          onClick={handleNavigate}
          style={{ cursor: 'pointer', textAlign: 'center' }}
        />
        <Collapse in={opened}>
          <Stack gap={0}>
            {data.content.map((content) => (
              <NavLink
                key={content.submenu}
                style={{ textAlign: 'center' }}
                label={content.submenu}
                href={`${href}/${content.submenu.toLowerCase().replace(/\s/g, '')}`}
                pl="lg"
              />
            ))}
          </Stack>
        </Collapse>
      </Box>
    );
  } else {
    const singleHref = data.content[0].menu.toLowerCase();
    return (
      <NavLink
        key={label}
        label={label}
        onClick={() => navigate(singleHref)}
        style={{ textAlign: 'center' }}
      />
    );
  }
}
