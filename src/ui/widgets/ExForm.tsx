import { useState, useEffect } from "react";
import Heading from "../atoms/Heading";
import InputField from "../molecules/InputField";
import ButtonSwitch from "../molecules/ButtonSwitch";
import TextAreaField from "../molecules/TextAreaField";
import useDataStore from "../../store/dataStore";

type Props = {
  id: number;
};

export default function ExForm({ id }: Props) {
  const experience = useDataStore((state) =>
    state.experience.find((e) => e.id === id)
  );
  const addExperience = useDataStore((state) => state.addExperience);
  const updateExperience = useDataStore((state) => state.updateExperience);
  const getNextOrder = useDataStore((state) => state.getNextOrder);

  const [localExp, setLocalExp] = useState({
    company: "",
    job: "",
    start: "",
    end: "",
    isCurrent: true,
    description: "",
  });

  useEffect(() => {
    if (experience) {
      setLocalExp({
        company: experience.company,
        job: experience.job,
        start: experience.start,
        end: experience.end || "",
        isCurrent: experience.isCurrent,
        description: experience.description,
      });
    } else {
      const order = getNextOrder();
      addExperience({
        id,
        order,
        company: "",
        job: "",
        start: "",
        end: undefined,
        isCurrent: true,
        description: "",
      });
    }
  }, [experience, id]);

  const handleChange = (
    field: keyof typeof localExp,
    value: string | boolean
  ) => {
    setLocalExp((prev) => ({
      ...prev,
      [field]: value,
    }));

    updateExperience(id, {
      [field]: value,
      end: field === "isCurrent" && value === true ? undefined : localExp.end,
    });
  };

  return (
    <div>
      <Heading
        level={3}
        className="mb-4 text-neutral-800 text-lg font-semibold"
      >
        Опыт работы
      </Heading>
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <InputField
          fieldName="Компания"
          htmlFor={`company_${id}`}
          placeholder="Название компании"
          type="text"
          value={localExp.company}
          onChange={(e) => handleChange("company", e.target.value)}
        />
        <InputField
          fieldName="Должность"
          htmlFor={`job_${id}`}
          placeholder="Название должности"
          type="text"
          value={localExp.job}
          onChange={(e) => handleChange("job", e.target.value)}
        />
      </div>
      <InputField
        fieldName="Начало работы"
        htmlFor={`start_job_${id}`}
        placeholder="ДД.ММ.ГГГГ"
        type="date"
        className="mb-4"
        value={localExp.start}
        onChange={(e) => handleChange("start", e.target.value)}
      />
      <div className="flex flex-col gap-4 mb-4">
        <ButtonSwitch
          text="Работаю сейчас"
          label="Работаю сейчас"
          enabled={localExp.isCurrent}
          toggle={() => handleChange("isCurrent", !localExp.isCurrent)}
        />
        {!localExp.isCurrent && (
          <InputField
            fieldName="Окончание"
            htmlFor={`end_job_${id}`}
            placeholder="ДД.ММ.ГГГГ"
            type="date"
            value={localExp.end}
            onChange={(e) => handleChange("end", e.target.value)}
          />
        )}
      </div>
      <TextAreaField
        fieldName="Чем вы занимались"
        htmlFor={`description_${id}`}
        placeholder="Расскажите о ваших обязанностях"
        className="w-full min-h-[200px]"
        value={localExp.description}
        onChange={(e) => handleChange("description", e.target.value)}
      />
    </div>
  );
}
