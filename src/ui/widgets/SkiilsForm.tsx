import { useState } from "react";
import Heading from "../atoms/Heading";
import InputField from "../molecules/InputField";
import Skill from "../molecules/Skill";
import useDataStore from "../../store/dataStore";

type Props = {
  id: number;
};

export default function SkillsForm({ id }: Props) {
  const skills = useDataStore((state) => state.skills);
  const setSkills = useDataStore((state) => state.setSkills);

  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!skills.includes(inputValue.trim())) {
        setSkills([...skills, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const handleDeleteSkill = (nameToDelete: string) => {
    setSkills(skills.filter((skill) => skill !== nameToDelete));
  };

  return (
    <div>
      <Heading
        level={3}
        className="mb-4 text-neutral-800 text-lg font-semibold"
      >
        Навыки
      </Heading>

      <InputField
        fieldName="Введите навык (нажмите Enter)"
        htmlFor={`skills_${id}`}
        placeholder="HTML5"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li key={index}>
            <Skill name={skill} onDelete={() => handleDeleteSkill(skill)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
