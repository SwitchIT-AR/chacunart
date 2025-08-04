import { Collapse, Text } from '@mantine/core';
import { NavbarLinkData } from './links';
import { Link } from 'react-router';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navlink.module.css';

interface NavbarLinkProps {
  data: NavbarLinkData;
}

export default function NavbarLink({ data }: NavbarLinkProps) {
  const [opened, { toggle }] = useDisclosure(false);

  if (data.isNested) {
    return (
      <>
        <Text component={Link} to={data.path} onClick={() => toggle()} className={classes.label}>
          {data.label}
        </Text>
        <Collapse in={opened}>
          <ul style={{ padding: 0 }}>
            {data.nestedLinks.map((nestedLink) => (
              <li key={nestedLink.path}>
                <Text component={Link} to={`${data.path}/${nestedLink.path}`} className={classes.nestedLabel}>
                  {nestedLink.label}
                </Text>
              </li>
            ))}
          </ul>
        </Collapse>
      </>
    );
  }

  return (
    <Text component={Link} to={data.path} onClick={() => toggle()} className={classes.label}>
      {data.label}
    </Text>
  );
}
