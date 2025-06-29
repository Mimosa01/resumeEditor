import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import FormContainer from "./FormContainer";
import useFormsStore from "../../store/formStore";
import type { SectionEnum } from "../../types/constants.types";

const ITEM_TYPE = "FORM_BLOCK";

type Props = {
  id: number;
  index: number;
  type: SectionEnum;
};

export default function DraggableForm({ id, index, type }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const moveForm = useFormsStore((state) => state.moveForm);

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item: { index: number }, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      if (
        (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) ||
        (dragIndex > hoverIndex && hoverClientY > hoverMiddleY)
      ) {
        return;
      }

      moveForm(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className="relative p-4 w-full bg-white rounded-[25px] shadow-popup"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      <FormContainer type={type} id={id} />
    </div>
  );
}
