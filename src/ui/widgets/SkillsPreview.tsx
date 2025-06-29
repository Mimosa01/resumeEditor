import useDataStore from "../../store/dataStore";

export default function SkillsPreview() {
  const skills = useDataStore((state) => state.skills);

  if (skills.length === 0) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Навыки</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <li
            key={idx}
            className="bg-[#dff4e5] text-[#193cb8] px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
