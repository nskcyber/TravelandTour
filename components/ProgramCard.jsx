export default function ProgramCard({ program }) {
  return (
    <div className="rounded-xl border shadow-sm transition hover:shadow-lg">
      <div className="flex items-center gap-3 p-5">
        <span className="text-4xl">{program.flag}</span>
        <h3 className="text-lg font-bold">{program.title}</h3>
      </div>
      <div className="space-y-2 px-5 pb-5 text-sm text-gray-600">
        <p><strong>{program.universities}</strong></p>
        <ul className="list-inside list-disc">
          {program.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
        <p>🗓️ Intakes: {program.intake}</p>
        <p className="font-semibold text-blue-700">{program.price}</p>
        <a href="/contact" className="mt-2 block rounded-lg bg-blue-600 py-2 text-center font-semibold text-white hover:bg-blue-700">
          Apply Now
        </a>
      </div>
    </div>
  );
}
