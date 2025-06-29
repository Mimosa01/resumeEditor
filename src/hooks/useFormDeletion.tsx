import useFormsStore from "../store/formStore";
import useDataStore from "../store/dataStore";
import type { SectionEnum } from "../types/constants.types";

export default function useFormDeletion() {
  const deleteForm = useFormsStore((state) => state.deleteForm);
  const deleteExperience = useDataStore((state) => state.deleteExperience);
  const deleteEducation = useDataStore((state) => state.deleteEducation);
  const setSkills = useDataStore((state) => state.setSkills);

  const handleDeleteForm = (type: SectionEnum, id: number) => {
    deleteForm(id);

    switch (type) {
      case "exp":
        deleteExperience(id);
        break;
      case "education":
        deleteEducation(id);
        break;
      case "skills":
        setSkills([]);
        break;
      case "about":
        break;
      default:
        console.warn("Unknown form type:", type);
    }
  };

  return { handleDeleteForm };
}
