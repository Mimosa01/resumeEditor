import { X } from "lucide-react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

type Props = {
  name: string;
  onDelete: () => void;
}

export default function Skill ({ name, onDelete }: Props) {
  return (
    <div className="flex items-center gap-2 px-[15px] py-3 bg-neutral-50 rounded-[25px] group">
      <Text className="text-neutral-800 text-base group-hover:text-neutral-500 transition-colors duration-300">{ name }</Text>
      <Button 
        onClick={onDelete}
      >
        <X className="group-hover:text-neutral-500 transition-colors duration-300"/>
      </Button>
    </div>
  )
}