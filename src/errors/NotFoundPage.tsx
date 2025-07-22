import { Button, Container, Group, Text, Title } from '@mantine/core';
import classes from './NothingFoundBackground.module.css';
import { useNavigate } from 'react-router';
import { Illustration } from './Illustration';

export function NothingFoundPage() {
  const navigate = useNavigate();
  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <Illustration className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>Nada para ver aqui!</Title>
          <Text
            c="dimmed"
            size="lg"
            ta="center"
            className={classes.description}
          >
            Estas tratando de ver una página que no existe. Es posible que haya
            alguna falta de ortografia en la direccion, o que la pagina haya
            cambiado de URL. Si pensas que es un error, por favor contactate con
            soporte tecnico..
          </Text>
          <Group justify="center">
            <Button onClick={() => navigate('/admin/dashboard')} size="md">
              Volver al Inicio
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}

export default NothingFoundPage;
