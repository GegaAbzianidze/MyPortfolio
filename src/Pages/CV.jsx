import { Document, Page, pdfjs } from "react-pdf";
import CVpdf from "/GegaAbzianidze.pdf";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const CV = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CVpdf;
    link.target = "_blank";
    link.download = "GegaAbzianidze_CV.pdf"; // Change the filename as desired
    link.click();
  };

  return (
    <div>
      <div className="p-4 flex justify-around">
        <button
          onClick={() => navigate("/")}
          className="flex gap-2 items-center p-5"
        >
          <Icon icon="ion:ios-arrow-back" />
          Back
        </button>
        <button
          onClick={handleDownload}
          className="flex gap-2 items-center p-5"
        >
          Download
          <Icon icon="akar-icons:download" />
        </button>
      </div>
      <div className="flex justify-center h-screen md:h-fit">
        <div className="w-fit m-5">
          <Document file={CVpdf}>
            <Page pageNumber={1} width={800} className="hidden md:block" />{" "}
            {/* PC width */}
            <Page pageNumber={1} width={390} className="block md:hidden" />{" "}
            {/* Mobile width */}
          </Document>
        </div>
      </div>
    </div>
  );
};

export default CV;
