// components/PdfViewer.tsx
import { Box } from '@mantine/core';
import DocumentArticle from '../../documents/DocumentArticle';
import { documentsByPath } from '../../documents/documentsContent';

interface File {
  label: string;
  path: string;
}

interface PdfViewerProps {
  files: File[];
}

export default function PdfViewer({ files }: PdfViewerProps) {
  return (
    <>
      {files.map((file) => {
        const content = documentsByPath[file.path];
        return (
          <Box key={file.label}>
            {content ? (
              <DocumentArticle content={content} />
            ) : (
              <embed
                src={`/assets/DOCUMENTOS/${file.path}`}
                type="application/pdf"
                width="100%"
                height="800px"
              />
            )}
          </Box>
        );
      })}
    </>
  );
}
