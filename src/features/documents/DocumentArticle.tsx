import { Box, Container, Image, Text, Title } from '@mantine/core';
import clsx from 'clsx';
import { DocBlock, DocContent } from './documentsContent';
import classes from './DocumentArticle.module.css';

interface DocumentArticleProps {
  content: DocContent;
}

function renderBlock(block: DocBlock, key: number) {
  switch (block.type) {
    case 'image':
      return (
        <Box key={key} className={classes.imageBlock}>
          <Image src={block.src} alt={block.alt} radius="sm" className={classes.image} />
          {block.caption && (
            <Text className={classes.caption} ta="center">
              {block.caption}
            </Text>
          )}
        </Box>
      );
    case 'heading':
      return (
        <Title key={key} order={2} className={classes.heading} ta="center">
          {block.text}
        </Title>
      );
    case 'list':
      return (
        <Box key={key} component="ul" className={classes.list}>
          {block.items?.map((item, i) => (
            <Text key={i} component="li" className={classes.listItem}>
              {item}
            </Text>
          ))}
        </Box>
      );
    case 'obraCard': {
      const obra = block.obra;
      if (!obra) return null;
      return (
        <Box key={key} className={classes.obraCard}>
          <Image
            src={`/assets/OBRAS/${obra.numero}-001.JPEG`}
            alt={obra.nombre}
            radius="sm"
            className={classes.image}
          />
          <Title order={3} className={classes.obraCardTitle} ta="center">
            {obra.nombre} <span className={classes.obraCardYear}>({obra.año})</span>
          </Title>
          <Box className={classes.obraCardMeta}>
            <Text className={classes.obraCardMetaLine}>
              <Text span className={classes.obraCardLabel}>Serie: </Text>
              {obra.serie}
            </Text>
            <Text className={classes.obraCardMetaLine}>
              <Text span className={classes.obraCardLabel}>Técnica: </Text>
              {obra.tecnica}
            </Text>
            <Text className={classes.obraCardMetaLine}>
              <Text span className={classes.obraCardLabel}>Materiales: </Text>
              {obra.materiales}
            </Text>
            <Text className={classes.obraCardMetaLine}>
              <Text span className={classes.obraCardLabel}>Medidas: </Text>
              {obra.medidas}
            </Text>
          </Box>
          {obra.nota && <Text className={classes.obraCardNota}>{obra.nota}</Text>}
        </Box>
      );
    }
    case 'paragraph':
    default:
      return (
        <Text key={key} className={classes.paragraph}>
          {block.text}
        </Text>
      );
  }
}

export default function DocumentArticle({ content }: DocumentArticleProps) {
  return (
    <Box className={classes.page}>
      <Container size="md" py="xl">
        <Title
          className={clsx(classes.title, content.titleFont === 'garamond' && classes.titleGaramond)}
          ta="center"
        >
          {content.title}
        </Title>
        <Box className={classes.divider}>
          <span className={classes.line} />
          <span className={classes.diamond}>◆</span>
          <span className={classes.diamond}>◆</span>
          <span className={classes.line} />
        </Box>
        {content.subtitle && (
          <Text className={classes.subtitle} ta="center">
            {content.subtitle}
          </Text>
        )}
        {content.author && (
          <Text className={classes.author} ta="center">
            {content.author}
          </Text>
        )}
        <Box className={classes.body}>
          {content.blocks.map((block, i) => renderBlock(block, i))}
        </Box>
      </Container>
    </Box>
  );
}
