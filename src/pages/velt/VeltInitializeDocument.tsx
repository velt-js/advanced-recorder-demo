import { useSetDocuments, useVeltClient } from '@veltdev/react';
import { useEffect, useMemo } from 'react';

// [VELT] Initializes the Velt document when the photo details page is loaded.
export default function VeltInitializeDocument() {
  const { setDocuments } = useSetDocuments();
  const document = useMemo(() => [
    {
      id: 'video-recording-demo-6',
      metadata: {
        documentName: 'Video Recording Demo 6'
      }
    },
  ], []);

  // Initialize the document. Document == video recording instance.
  useEffect(() => {
    if (setDocuments && document) {
      setDocuments(document);
    }
  }, [setDocuments, document]);

  return null;
}
