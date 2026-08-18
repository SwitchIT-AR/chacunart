import { Box, Container, Image, Text, Title } from '@mantine/core';
import { DocContent } from './documentsContent';
import classes from './DocumentArticle.module.css';

interface DocumentArticleProps {
  content: DocContent;
}

export default function DocumentArticle({ content }: DocumentArticleProps) {
  return (
    <Box className={classes.page}>
      <Container size="md" py="xl">
        <Title className={classes.title} ta="center">
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
          {content.blocks.map((block, i) =>
            block.type === 'image' ? (
              <Image
                key={i}
                src={block.src}
                alt={block.alt}
                radius="sm"
                className={classes.image}
              />
            ) : (
              <Text key={i} className={classes.paragraph}>
                {block.text}
              </Text>
            ),
          )}
        </Box>
      </Container>
    </Box>
  );
}
