import { Box, Group, Loader } from "@mantine/core";
import { Outlet } from "react-router";
// import { useCollectionData } from "../../api/sheets";

export default function ArtRoot() {
  // const collections = useCollectionData('ListaColecciones');

  return (
    <Box component="section">
      {/* {collections.isLoading && (
        <Group justify="center" pt={'xl'}>
          <Loader />
        </Group>
      )}
      {collections.isSuccess && (
        <Outlet context={{ collections: collections.data }} />
      )} */}
    </Box>
  )
}