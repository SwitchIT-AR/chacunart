import { Code, Container, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { useRouteError } from 'react-router';

export default function ErrorScreen(props: ErrorScreenProps) {
  const error = useRouteError() as Error;
  return (
    <Container size='lg' mt="6rem">
      <Stack gap="sm" align="center">
        <ThemeIcon color="red" size="xl" variant="light">
          <IconAlertTriangle />
        </ThemeIcon>
        <Title ta="center">Hubo un error</Title>
        <Text ta="center">{props.children}</Text>
        {props.useRouterError ? (
          <>
            <Text fw={600} mb={5}>
              {error.message}
            </Text>
            <Code ta='center' block fz="12px">
              {error.stack}
            </Code>
          </>
        ) : (
          <Text c="dimmed" ta="center">
            Por favor intente más tarde. Si el problema persiste, por favor
            contacte a soporte técnico.
          </Text>
        )}
      </Stack>
    </Container>
  );
}

export interface ErrorScreenProps {
  readonly children: ReactNode;
  readonly useRouterError?: boolean;
}
