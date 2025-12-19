import htmlcssjs from '../assets/htmlcssjs-details.png';
import { useState } from 'react';

// React-PDF
import { pdfjs, Document, Page } from 'react-pdf';
import workerSrc from 'pdfjs-dist/build/pdf.worker.mjs?url';

// pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

//import the pdf file
import MyCV from '../assets/CV2025.pdf';

export default function Resume() {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="maindiv mx-auto">
      <h1 className="almendra-regular">My CV / Résumé</h1>

      {/* view my resume */}
      <div className="mx-auto" style={{ width: "fit-content", marginTop: "2rem" }}>
        <Document file={MyCV} onLoadSuccess={onDocumentLoadSuccess}>
          {numPages &&
            Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} />
            ))}
        </Document>
      </div>

      <div className="container_skills"></div>
    </div>
  );
}