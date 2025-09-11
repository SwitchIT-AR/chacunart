import { Button, Group, ScrollArea, Text, Title } from '@mantine/core';

import classes from './ServerError.module.css';
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router';

interface ErrorPageProps {
  message?: string;
  refresh?: boolean;
  volver?: boolean;
  code?: number | string;
}

export function ErrorPage(props: ErrorPageProps) {
// export function ErrorPage() {
  const { refresh, volver, code } = props;
  const navigate = useNavigate();
  const error = useRouteError(); // Hook to get route error details

  // Determine if it's a response error or a JavaScript error
  const errorMessage = isRouteErrorResponse(error)
    ? error.statusText // HTTP error message
    : (error as Error).message; // JavaScript error message

  const errorStack = (error as Error).stack;

  return (
    <div className={classes.root}>
      {/* <Container size='xl'> */}
        <div className={classes.label}>{code ?? '404'}</div>
        <Title className={classes.title}>ups... Algo esta pasando</Title>
        <ScrollArea h={450} mb={20}>
          <Text size="lg" ta="center" className={classes.description}>
            {errorMessage}
          </Text>
          <Text size="sm" ta="center" className={classes.description}>
            {errorStack}
          </Text>
        </ScrollArea>
        <Group justify="center" gap={20}>
          {refresh && (
            <Button variant="white" size="md" onClick={() => location.reload()}>
              Recarga la página
            </Button>
          )}
          {volver && (
            <Button
              variant="white"
              size="md"
              onClick={() => navigate('/admin/dashboard')}
            >
              Volver al inicio
            </Button>
          )}
        </Group>
      {/* </Container> */}
    </div>
  );
}