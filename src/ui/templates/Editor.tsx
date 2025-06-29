import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { SECTIONS } from "../../lib/contants";
import useFormsStore from "../../store/formStore";
import BaseForm from "../widgets/BaseForm";
import DropdownSection from "../organisms/DropdownSection";
import DraggableForm from "../organisms/DraggableForm";
import { useEffect } from "react";

export default function Editor() {
  const forms = useFormsStore((state) => state.forms);
  const loadForms = useFormsStore((state) => state.loadFromStorage);

  useEffect(() => {
    loadForms();
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col gap-4 items-center w-full">
        <BaseForm />
        {forms.map((item, index) => (
          <DraggableForm
            key={item.id}
            id={item.id}
            index={index}
            type={item.type}
          />
        ))}
        <DropdownSection items={SECTIONS} />
      </div>
    </DndProvider>
  );
}
