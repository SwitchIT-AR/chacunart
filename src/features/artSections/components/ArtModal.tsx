import {
  ActionIcon,
  Box,
  Button,
  Container,
  Image,
  Modal,
  Text,
  Title,
} from '@mantine/core';
import { Obra } from '../../../utils/Global.types';
import { FALLBACK } from '../../../utils/constants';
import { useDisclosure } from '@mantine/hooks';
import classes from './ArtModal.module.css';
import { IconBrandYoutube, IconX } from '@tabler/icons-react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

interface ArtModalProps {
  obra: Obra;
  height: string;
}

const getImagesUrl = (obraNumber: string) => {
  const urls = [];

  for (let i = 1; i <= 10; i++) {
    urls.push(`/assets/OBRAS/${obraNumber}-00${i}.JPEG`);
  }

  return urls;
};

export default function ArtModal({ obra, height }: ArtModalProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const obraSrc = (o?: Obra) =>
    o ? `/assets/OBRAS/${o.numero}-001.JPEG` : undefined;

  const imagesUrl = getImagesUrl(obra.numero);
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size={'100%'}
      >
        <Box>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ActionIcon variant="light" size={'md'} onClick={close}>
              <IconX />
            </ActionIcon>
          </div>
          <Container>
            <Title ta={'center'} mb={'md'}>
              {obra.nombre}
            </Title>
            <Box mb={'md'} className={classes.descriptionContainer}>
              {obra.descripcion && (
                <Text className={classes.description}>{obra.descripcion}</Text>
              )}
              <Text>
                <Text span className={classes.labelTitles}>
                  Medidas:{' '}
                </Text>
                {obra.medidas ? obra.medidas : 'Sin información'}
              </Text>
              <Text>
                <Text span className={classes.labelTitles}>
                  Peso:{' '}
                </Text>
                {obra.peso ? obra.peso : 'Sin información'}
              </Text>
              <Text>
                <Text span className={classes.labelTitles}>
                  Precio:{' '}
                </Text>
                {obra.precioUsd ? obra.precioUsd : 'Sin información'}
              </Text>
              <Text>
                <Text span className={classes.labelTitles}>
                  Técnica:{' '}
                </Text>
                {obra.tecnica ? obra.tecnica : 'Sin información'}
              </Text>
              <Text>
                <Text span className={classes.labelTitles}>
                  Estado:{' '}
                </Text>
                {obra.estado ? obra.estado : 'Sin información'}
              </Text>
              {obra.video && (
                <Button
                  mt={'md'}
                  component="a"
                  variant="light"
                  color="red"
                  target="_blank"
                  href={obra.video}
                  leftSection={<IconBrandYoutube />}
                >
                  Ver Video
                </Button>
              )}
            </Box>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry>
                {imagesUrl.map((url) => (
                  <Image
                    key={url}
                    src={url}
                    fallbackSrc={FALLBACK}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </Container>
        </Box>
      </Modal>
      <Image
        className={classes.image}
        src={obraSrc(obra)}
        fallbackSrc={FALLBACK}
        h={height}
        onClick={() => open()}
      />
    </>
  );
}
