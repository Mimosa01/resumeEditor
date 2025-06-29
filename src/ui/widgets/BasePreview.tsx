import useDataStore from "../../store/dataStore";

export default function BasePreview() {
  const about = useDataStore(state => state.about);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold">
        {about.surname} {about.name} {about.lastname}
      </h2>
      <p className="text-sm text-[#000]">
        {about.city}, {about.country} • {about.date}
      </p>
    </div>
  );
}
