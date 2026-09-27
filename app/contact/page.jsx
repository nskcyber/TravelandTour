import { contactInfo } from "@/data/siteData";

export const metadata = { title: "Contact & Free Consultation" };

export default function Contact() {
  return (
    <>
      <section className="bg-blue-700 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2">Offices in Accra 🇬🇭 & Lagos 🇳🇬 — or reach us online.</p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2">
        <form className="space-y-4 rounded-xl border p-6" action="mailto:info@afriglobaltravels.com" method="POST">
          <h2 className="text-xl font-bold">Book a Free Consultation</h2>
          <input name="name" placeholder="Full Name" required className="w-full rounded-lg border p-3" />
          <input name="phone" placeholder="Phone / WhatsApp" required className="w-full rounded-lg border p-3" />
          <input name="email" type="email" placeholder="Email" className="w-full rounded-lg border p-3" />
          <select name="interest" className="w-full rounded-lg border p-3">
            <option>Study Abroad</option>
            <option>Holiday Tour Package</option>
            <option>Visa Processing</option>
            <option>Flight Booking</option>
          </select>
          <textarea name="message" rows="4" placeholder="Tell us your plans (destination, budget, timeline)..." className="w-full rounded-lg border p-3" />
          <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
            Submit Request
          </button>
        </form>
        <div className="space-y-4">
          <div className="rounded-xl border p-6">
            <h3 className="font-bold">🇬🇭 Ghana Office</h3>
            <p className="mt-1 text-sm text-gray-600">{contactInfo.accraOffice}</p>
            <p className="text-sm text-gray-600">📞 {contactInfo.phone}</p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="font-bold">🇳🇬 Nigeria Office</h3>
            <p className="mt-1 text-sm text-gray-600">{contactInfo.lagosOffice}</p>
            <p className="text-sm text-gray-600">📞 {contactInfo.nigeriaPhone}</p>
          </div>
          <a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl bg-green-500 p-6 text-center font-semibold text-white hover:bg-green-600"
          >
            💬 Chat on WhatsApp Now
          </a>
        </div>
      </section>
    </>
  );
}
