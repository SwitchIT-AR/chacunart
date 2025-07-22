import { NavLink } from "@mantine/core";
import { NavbarLinkData } from "./links";
import { Link } from "react-router";

interface NavbarLinkProps {
  data: NavbarLinkData;
}

export default function NavbarLink({ data }: NavbarLinkProps) {
  const icon = <data.icon size={'1rem'} stroke={'0.12rem'} />
  
  if (data.isNested) {
    return (
      <NavLink component={Link} to={data.path} label={data.label}>
        {
          data.nestedLinks.map((nestedLink) => (
            <NavLink key={nestedLink.path} component={Link} to={nestedLink.path} label={nestedLink.label} />
          ))
        }
      </NavLink>
    )
  }

  return (
    <NavLink component={Link} to={data.path} label={data.label}  rightSection={icon} />
  )
}