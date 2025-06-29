import useDataStore from "../../store/dataStore";

type Props = {
  id: number;
};

export default function EducationPreview ({ id }: Props) {
  const education = useDataStore((state) =>
    state.education.find((e) => e.id === id)
  );

  if (!education) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Образование</h2>
      <div className="font-medium text-base">{education.university}</div>
      <div className="text-sm text-[#000] italic">
        {education.speciality} • {education.start} — {education.end}
      </div>
    </section>
  );
};

