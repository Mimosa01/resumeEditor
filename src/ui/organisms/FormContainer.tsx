import type { ReactNode } from "react";
import type { SectionEnum } from "../../types/constants.types";
import AboutForm from "../widgets/BaseForm";
import EducationForm from "../widgets/EducationForm";
import ExForm from "../widgets/ExForm";
import SkillsForm from "../widgets/SkiilsForm";
import Button from "../atoms/Button";
import { X } from "lucide-react";
import useFormDeletion from "../../hooks/useFormDeletion";

type Props = {
  type: SectionEnum;
  id: number;
};

export default function FormContainer({ type, id }: Props) {
  const { handleDeleteForm } = useFormDeletion();

  let body: ReactNode;
  if (type === "about") body = <AboutForm />;
  if (type === "education") body = <EducationForm id={id} />;
  if (type === "exp") body = <ExForm id={id} />;
  if (type === "skills") body = <SkillsForm id={id} />;

  return (
    <div>
      <Button
        onClick={() => handleDeleteForm(type, id)}
        className="absolute top-[16px] right-[16px] hover:text-neutral-500 transition-colors duration-300"
      >
        <X />
      </Button>
      {body}
    </div>
  );
}
