import React from 'react';

interface PDFViewerProps {
    file: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file }) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <embed src={file} type="application/pdf" style={{ width: '100%', height: '100%' }} />
  </div>
);

export default PDFViewer;