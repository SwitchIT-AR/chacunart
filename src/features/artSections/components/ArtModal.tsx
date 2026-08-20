import {
  ActionIcon,
  Box,
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
  const location = window.location;

  const obraSrc = (o?: Obra) =>
    o ? `/assets/OBRAS/${o.numero}-001.JPEG` : undefined;

  const [thumbOk, setThumbOk] = useState(true);
  const imagesUrl = getImagesUrl(obra.numero);

  const isExibition = location.toString().includes('exibitions');
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
            <ActionIcon variant="light" color="yellow" size={'md'} onClick={close}>
              <IconX />
            </ActionIcon>
          </div>
          <Container>
            <Box mb={'md'}>
              <Title className={classes.obraTitle} ta={'center'}>
                {obra.nombre}
              </Title>
              <Box className={classes.obraTitleDivider}>
                <span className={classes.line} />
                <span className={classes.diamond}>◆</span>
                <span className={classes.diamond}>◆</span>
                <span className={classes.line} />
              </Box>
            </Box>
            <Box mb={'md'} className={classes.descriptionContainer}>
              {obra.descripcion && (
                <Text className={classes.description}>{obra.descripcion}</Text>
              )}
              {!isExibition && (
                <>
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
                </>
              )}
              {obra.video && (
                <a
                  href={obra.video}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.videoButton}
                >
                  <IconBrandYoutube size={'1.2rem'} className={classes.videoButtonIcon} />
                  Ver Video
                </a>
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
        <Box className={classes.card}>
          <Box className={classes.titleBlock}>
            <Text className={classes.obraTitle}>{obra.nombre}</Text>
            <Box className={classes.obraTitleDivider}>
              <span className={classes.line} />
              <span className={classes.diamond}>◆</span>
              <span className={classes.diamond}>◆</span>
              <span className={classes.line} />
            </Box>
          </Box>
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
