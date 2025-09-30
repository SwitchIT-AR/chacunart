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
//import { FALLBACK } from '../../../utils/constants';
import { useDisclosure } from '@mantine/hooks';
import classes from './ArtModal.module.css';
import { IconBrandYoutube, IconX } from '@tabler/icons-react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { useState } from 'react';

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

export default function ArtModal({ obra }: ArtModalProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const obraSrc = (o?: Obra) =>
    o ? `/assets/OBRAS/${o.numero}-001.JPEG` : undefined;

  const [thumbOk, setThumbOk] = useState(true);
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
                  Técnica:{' '}
                </Text>
                {obra.tecnica ? obra.tecnica : 'Sin información'}
              </Text>
              <Text>
                <Text span className={classes.labelTitles}>
                  Estado:{' '}
                </Text>
                {obra.estado
                  ? ({ C: 'En Galería', V: 'Vendida', D: 'Donada' }[
                      obra.estado
                    ] ?? 'Sin información')
                  : 'Disponible'}{' '}
              </Text>
              {obra.video && (
                <Button
                  mt={'md'}
                  component="a"
                  variant="light"
                  color="transparent"
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
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.imageContainer}
                  >
                    <img
                      src={url}
                      onError={(e) => {
                        e.currentTarget.remove();
                      }}
                      loading="lazy"
                      className={classes.hoverZoom}
                    />
                  </a>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </Container>
        </Box>
      </Modal>
      {thumbOk && obraSrc(obra) && (
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* <Box style={{ backgroundColor: '#FDECDA', }}> */}
            <Text
            flex={1}
            ta={'center'}
              style={{
                width: '100%',
                position: 'absolute',
                fontSize: '1.5rem',
                color: 'black',
                fontWeight: 600,
                bottom: '0',
                zIndex: 1,
                fontFamily: 'Roboto',
                backgroundColor: 'rgba(253, 236, 218, 0.5)',
              }}
            >
              {obra.nombre}
            </Text>
          {/* </Box> */}
          <Image
            className={classes.image}
            src={obraSrc(obra)!}
            // h={height}
            onClick={open}
            // sin fallbackSrc
            onError={() => {
              setThumbOk(false); // si 404, no se muestra nada
            }}
          />
        </Box>
      )}
    </>
  );
}
