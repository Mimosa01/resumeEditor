import useFormsStore from "../../store/formStore";
import type { SectionType } from "../../types/constants.types"
import Button from "../atoms/Button";

type Props = {
  items: SectionType[];
  toggle: () => void;
}

export default function SectionMenu ({ items, toggle }: Props) {
  const addFormByType = useFormsStore(state => state.addFormByType);

  const handleAddForm = (item: SectionType) => {
    addFormByType(item.type, item.name);
    toggle();
  }

  return (
    <ul className="flex flex-col w-full">
      {items.map((item) => (
          <li key={item.id}>
            <Button
              className={`
                flex justify-between w-full px-4 py-2 text-lg leading-5.5
                hover:bg-neutral-200 transition-all duration-300
              `}
              onClick={() => handleAddForm(item)}
            >
              {item.name}
            </Button>
          </li>
        ))}
    </ul>
  )
}