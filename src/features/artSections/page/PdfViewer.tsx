// components/PdfViewer.tsx
import { Box } from '@mantine/core';

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
      {files.map((file) => (
        <Box key={file.label}>
          <embed
            src={`/assets/DOCUMENTOS/${file.path}`}
            type="application/pdf"
            width="100%"
            height="800px"
          />
        </Box>
      ))}
    </>
  );
}