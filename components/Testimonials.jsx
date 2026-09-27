import { testimonials } from "@/data/siteData";

export default function Testimonials() {
  return (
    <section className="bg-blue-50 py-14">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold">What Our Clients Say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-gray-600">“{t.text}”</p>
              <p className="mt-4 font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
