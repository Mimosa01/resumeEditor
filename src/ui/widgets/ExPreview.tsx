import useDataStore from "../../store/dataStore";

type Props = {
  id: number;
};

export default function ExPreview ({ id }: Props) {
  const experience = useDataStore((state) =>
    state.experience.find((e) => e.id === id)
  );

  if (!experience) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Опыт работы</h2>
      <div className="font-medium text-base">{experience.company}</div>
      <div className="text-sm text-[#000] italic">
        {experience.job} •{" "}
        {experience.isCurrent
          ? `с ${experience.start} по настоящее время`
          : `${experience.start} — ${experience.end}`}
      </div>
      {experience.description && (
        <p className="text-sm text-[#000] mt-1 whitespace-pre-wrap">
          {experience.description}
        </p>
      )}
    </section>
  );
};

