import Heading from "../atoms/Heading";
import InputField from "../molecules/InputField";
import type { ChangeEvent } from "react";
import useDataStore from "../../store/dataStore";

export default function AboutForm() {
  const { about, setAbout } = useDataStore((state) => state);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAbout({ [name]: value });
  };

  return (
    <div className="p-4 w-full bg-white rounded-[25px] shadow-popup">
      <Heading level={3} className="mb-4 text-neutral-800 text-lg font-semibold">
        Базовая информация
      </Heading>

      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <InputField
          fieldName="Фамилия"
          htmlFor="surname"
          placeholder="Фамилия"
          type="text"
          name="surname"
          value={about.surname}
          onChange={handleChange}
          autoComplete="family-name"
          autoCapitalize="on"
        />
        <InputField
          fieldName="Имя"
          htmlFor="name"
          placeholder="Имя"
          type="text"
          name="name"
          value={about.name}
          onChange={handleChange}
          autoComplete="given-name"
          autoCapitalize="on"
        />
        <InputField
          fieldName="Отчество"
          htmlFor="lastname"
          placeholder="Отчество"
          type="text"
          name="lastname"
          value={about.lastname}
          onChange={handleChange}
          autoComplete="additional-name"
          autoCapitalize="on"
        />
      </div>

      <InputField
        fieldName="Дата рождения"
        htmlFor="date"
        placeholder="ДД.ММ.ГГГГ"
        type="date"
        name="date"
        value={about.date}
        onChange={handleChange}
        className="mb-4"
      />

      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <InputField
          fieldName="Страна проживания"
          htmlFor="country"
          placeholder="Страна"
          type="text"
          name="country"
          value={about.country}
          onChange={handleChange}
          autoComplete="country-name"
          autoCapitalize="on"
        />
        <InputField
          fieldName="Город"
          htmlFor="city"
          placeholder="Город"
          type="text"
          name="city"
          value={about.city}
          onChange={handleChange}
          autoComplete="address-level2"
          autoCapitalize="on"
        />
      </div>
    </div>
  );
}
