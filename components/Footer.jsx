import Link from "next/link";
import { contactInfo } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold text-white">🌍 AfriGlobal Travels</h3>
          <p className="mt-2 text-sm">
            Your trusted partner for study abroad admissions, visa processing and holiday tours — serving Ghana and Nigeria.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/study-abroad">Study Abroad</Link></li>
            <li><Link href="/tours">Tours & Travel</Link></li>
            <li><Link href="/visa-services">Visa Services</Link></li>
            <li><Link href="/contact">Book Consultation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Offices</h4>
          <p className="mt-2 text-sm">🇬🇭 {contactInfo.accraOffice}</p>
          <p className="mt-2 text-sm">🇳🇬 {contactInfo.lagosOffice}</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <p className="mt-2 text-sm">📞 {contactInfo.phone} (Ghana)</p>
          <p className="text-sm">📞 {contactInfo.nigeriaPhone} (Nigeria)</p>
          <p className="text-sm">✉️ {contactInfo.email}</p>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-sm">
        © {new Date().getFullYear()} AfriGlobal Travels. All rights reserved.
      </div>
    </footer>
  );
}
