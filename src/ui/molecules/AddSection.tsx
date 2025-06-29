import Button from "../atoms/Button";
import Text from "../atoms/Text";
import { Plus } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClick: () => void;
}

export default function AddSection ({ isOpen, onClick }: Props) {
  return ( 
    <Button
      onClick={onClick}
      aria-expanded={isOpen} 
      aria-haspopup="true"
      className={`
        flex items-center cursor-pointer group
        px-[15px] py-3
        bg-blue-600 rounded-[25px]
      `}
    >
      <Plus className="text-white group-hover:text-primary-500 transition-colors duration-300" />
      <Text className="
        text-white text-base text-nowrap group-hover:text-primary-500 transition-colors duration-300
      ">
        Добавить секцию
      </Text>
    </Button>
  )
}