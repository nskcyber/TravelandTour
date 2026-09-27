import { contactInfo } from "@/data/siteData";

export const metadata = { title: "Visa & Travel Services" };

const services = [
  ["Study Visa Processing", "Full application filing, document review and interview coaching for Canada, UK, USA, Schengen and more."],
  ["Tourist & Visit Visa", "Dubai, Turkey, UK, Schengen, USA B1/B2 — with strong documentation to boost approval."],
  ["Flight Booking", "Discounted international and local flights from Accra, Lagos and Kumasi."],
  ["Hotel & Accommodation", "Student housing abroad and hotel reservations for travellers."],
  ["Travel Insurance", "Mandatory Schengen-compliant and general travel insurance."],
  ["Visa Appointment Booking", "We handle VFS/TLSappointment slots so you don't have to struggle."],
];

export default function VisaServices() {
  return (
    <>
      <section className="bg-blue-700 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Visa & Travel Services 🛂</h1>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(([t, d]) => (
            <div key={t} className="rounded-xl border p-6">
              <h3 className="font-bold text-blue-700">{t}</h3>
              <p className="mt-2 text-sm text-gray-600">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-xl bg-blue-50 p-8 text-center">
          <h2 className="text-xl font-bold">Not sure which visa you need?</h2>
          <p className="mt-2 text-gray-600">Book a free 15-minute consultation with our visa experts.</p>
          <a href="/contact" className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white">
            Book Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}
