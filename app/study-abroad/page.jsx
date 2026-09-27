import ProgramCard from "@/components/ProgramCard";
import { programs, faqs } from "@/data/siteData";

export const metadata = { title: "Study Abroad from Ghana & Nigeria" };

export default function StudyAbroad() {
  return (
    <>
      <section className="bg-blue-700 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Study Abroad 🎓</h1>
        <p className="mt-2">Admissions • Scholarships • Visa Processing — Ghana & Nigeria</p>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => <ProgramCard key={p.country} program={p} />)}
        </div>
        <h2 className="mt-16 text-center text-2xl font-bold">How It Works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            ["1. Free Assessment", "Submit your WAEC/degree results and budget for a free eligibility check."],
            ["2. School Selection", "We match you to universities that fit your grades and finances."],
            ["3. Application & Offer", "We handle applications, transcripts and secure your admission letter."],
            ["4. Visa & Travel", "Visa filing, interview prep, flight and accommodation — done."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border p-6">
              <h3 className="font-bold text-blue-700">{t}</h3>
              <p className="mt-2 text-sm text-gray-600">{d}</p>
            </div>
          ))}
        </div>
        <h2 className="mt-16 text-center text-2xl font-bold">FAQs</h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-lg border p-4">
              <summary className="font-semibold cursor-pointer">{f.q}</summary>
              <p className="mt-2 text-sm text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
