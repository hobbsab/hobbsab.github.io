import htmlcssjs from '../assets/htmlcssjs-details.png';

// React-PDF imports
import { pdfjs, Document, Page } from 'react-pdf';
import workerSrc from 'pdfjs-dist/build/pdf.worker.mjs?url';

// Configure the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

// Import your PDF (adjust path if needed)
import samplePdf from '../assets/sample.pdf';

export default function Resume() {
  return (
    <div className="maindiv mx-auto">
      <h1 className="almendra-regular">Resume / stack skillset</h1>

{/* PDF Viewer */}
<div className="mx-auto" style={{ width: "fit-content", marginTop: "2rem" }}>
  <Document file={samplePdf}>
    <Page pageNumber={1} />
  </Document>
</div>


      {/* <img className="errorImg mx-auto p-3" src={htmlcssjs} />
      <img
        className="errorImg mx-auto p-3"
        src="https://gurzu.com/img/gurzu/mern-stack-01.webp"
      /> */}

      <div className="container_skills"></div>
    </div>
  );
}
