import type { ReactNode } from "react"
import type { SectionEnum } from "../../types/constants.types";
import BasePreview from "../widgets/BasePreview";
import EducationPreview from "../widgets/EducationPreview";
import ExPreview from "../widgets/ExPreview";
import SkillsPreview from "../widgets/SkillsPreview";

type Props = {
  type: SectionEnum;
  id: number;
};

export default function PreviewContainer ({ type, id }: Props) {
  let body: ReactNode;

    if (type === "about") body = <BasePreview />;
    if (type === "education") body = <EducationPreview id={id} />;
    if (type === "exp") body = <ExPreview id={id} />;
    if (type === "skills") body = <SkillsPreview />;
  
  return (
    <div>
      { body }
    </div>
  )
}