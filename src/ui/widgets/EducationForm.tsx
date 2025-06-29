import { useEffect, useState } from "react";
import useDataStore from "../../store/dataStore";
import Heading from "../atoms/Heading";
import InputField from "../molecules/InputField";

type Props = {
  id: number;
};

export default function EducationForm({ id }: Props) {
  const education = useDataStore((state) =>
    state.education.find((e) => e.id === id)
  );
  const addEducation = useDataStore((state) => state.addEducation);
  const updateEducation = useDataStore((state) => state.updateEducation);
  const getNextOrder = useDataStore((state) => state.getNextOrder);

  const [localEdu, setLocalEdu] = useState({
    university: "",
    speciality: "",
    start: "",
    end: "",
  });

  useEffect(() => {
    if (education) {
      setLocalEdu({
        university: education.university,
        speciality: education.speciality,
        start: education.start,
        end: education.end,
      });
    } else {
      const order = getNextOrder();
      addEducation({
        id,
        order,
        university: "",
        speciality: "",
        start: "",
        end: "",
      });
    }
  }, [education, id]);

  const handleChange = (
    field: keyof typeof localEdu,
    value: string
  ) => {
    const updated = { ...localEdu, [field]: value };
    setLocalEdu(updated);
    updateEducation(id, { [field]: value });
  };

  return (
    <div>
      <Heading
        level={3}
        className="mb-4 text-neutral-800 text-lg font-semibold"
      >
        Образование
      </Heading>

      <InputField
        fieldName="Учебное заведение"
        htmlFor={`education_${id}`}
        placeholder="Название"
        type="text"
        className="mb-4"
        value={localEdu.university}
        onChange={(e) => handleChange("university", e.target.value)}
      />

      <InputField
        fieldName="Специальность"
        htmlFor={`speciality_${id}`}
        placeholder="Специальность"
        type="text"
        className="mb-4"
        value={localEdu.speciality}
        onChange={(e) => handleChange("speciality", e.target.value)}
      />

      <div className="flex flex-col md:flex-row gap-4 md:gap-2 lg:mb-4">
        <InputField
          fieldName="Начало учебы"
          htmlFor={`start_learn_${id}`}
          placeholder="ДД.ММ.ГГГГ"
          type="date"
          value={localEdu.start}
          onChange={(e) => handleChange("start", e.target.value)}
        />
        <InputField
          fieldName="Окончание учебы"
          htmlFor={`end_learn_${id}`}
          placeholder="ДД.ММ.ГГГГ"
          type="date"
          value={localEdu.end}
          onChange={(e) => handleChange("end", e.target.value)}
        />
      </div>
    </div>
  );
}
