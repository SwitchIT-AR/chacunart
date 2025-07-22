import { Button, Table, Text } from '@mantine/core'; // Adjust the import according to your UI library

interface TableErrorProps {
  message: string;
  fetch?: () => Promise<void>;
}

export default function TableError(props: TableErrorProps) {
  const { message, fetch } = props;
  return (
    <Table.Tr>
      <Table.Td colSpan={5} py={10}>
        <Text mb={5} ta="center" c="red">
          {message}
        </Text>
        {fetch && (
          <Button
            onClick={() => {
              void fetch();
            }}
            variant="outline"
            fullWidth
          >
            Reintentar
          </Button>
        )}
      </Table.Td>
    </Table.Tr>
  );
}
