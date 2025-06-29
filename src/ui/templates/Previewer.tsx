import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import useFormsStore from "../../store/formStore";
import Button from "../atoms/Button";
import PreviewContainer from "../organisms/PreviewContainer";
import BasePreview from "../widgets/BasePreview";
import Text from "../atoms/Text";

export default function Previewer() {
  const forms = useFormsStore(state => state.forms);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleSavePDF = async () => {
    if (!previewRef.current) return;

    const canvas = await html2canvas(previewRef.current, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "px", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = (canvas.height * pageWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
    pdf.save("preview.pdf");
  };


  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div
        ref={previewRef}
        className="p-4 w-full h-fit bg-white rounded-[25px] shadow-popup"
      >
        <BasePreview />
        {forms.map((form) => (
          <PreviewContainer key={form.id} type={form.type} id={form.id} />
        ))}
      </div>
      <Button onClick={handleSavePDF} className="flex items-center cursor-pointer group px-[15px] py-3 bg-blue-600 rounded-[25px]">
        <Text className="text-[#fff]">Сохранить PDF</Text>
      </Button>
    </div>
  );
}
