export const metadata = { title: "About Us" };

export default function About() {
  return (
    <>
      <section className="bg-blue-700 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">About AfriGlobal Travels</h1>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-lg leading-relaxed">
          AfriGlobal Travels was founded to make global opportunities accessible to students and travellers
          in <strong>Ghana</strong> and <strong>Nigeria</strong>. From our offices in Accra and Lagos, we have
          helped hundreds of clients secure admissions, study visas and memorable holiday experiences
          across Canada, the UK, USA, Europe, Dubai and across Africa.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[["500+", "Successful visa applications"], ["300+", "Students placed abroad"], ["15+", "Countries served"]].map(([n, l]) => (
            <div key={l} className="rounded-xl bg-blue-50 p-6 text-center">
              <p className="text-3xl font-bold text-blue-700">{n}</p>
              <p className="mt-1 text-sm text-gray-600">{l}</p>
            </div>
          ))}
        </div>
        <h2 className="mt-12 text-2xl font-bold">Why Choose Us</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
          <li>Licensed consultants with real admission and visa track records</li>
          <li>Transparent fees with installment payment options</li>
          <li>Offices in Accra and Lagos — walk-ins welcome</li>
          <li>End-to-end support: admission → visa → flight → arrival</li>
        </ul>
      </section>
    </>
  );
}
