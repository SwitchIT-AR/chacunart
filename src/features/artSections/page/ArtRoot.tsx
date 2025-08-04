import { Box } from '@mantine/core';
import { Link, useParams } from 'react-router';
import { navbarLinksData } from '../../../layout/components/navbar/links';
import ErrorScreen from '../../../errors/ErrorScreen';
import classes from './ArtRoot.module.css';

interface Submenu {
  imagePathColor: string;
  imagePathBlack: string;
  submenuPath: string;
  submenuLabel: string;
}

export default function ArtRoot() {
  const { exibitionLabel } = useParams();
  const link = navbarLinksData.filter(
    (link) => link.path === `/${exibitionLabel}`,
  );

  if (!link) {
    return (
      <ErrorScreen>
        No se pudo encontrar la informacion de este link
      </ErrorScreen>
    );
  }

  const submenus: Submenu[] = link[0].nestedLinks.map((submenu) => {
    return {
      imagePathColor: `/assets/MENU/${link[0].imageKey}_${submenu.label}C.JPEG`,
      imagePathBlack: `/assets/MENU/${link[0].imageKey}_${submenu.label}.JPEG`,
      submenuLabel: submenu.label,
      submenuPath: submenu.path,
    };
  });

  console.log(submenus);

  return (
    <Box component="section">
      <Box className={classes.submenuContainer}>
        {submenus.map((submenu) => (
          <Box
            key={submenu.submenuLabel}
            className={classes.submenuItem}
            // style={{ backgroundImage: `url(${submenu.imagePathColor})` }}
            component={Link}
            to={submenu.submenuPath}
          >
            <img
              src={submenu.imagePathColor}
              alt={submenu.submenuLabel}
              className={classes.image}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
