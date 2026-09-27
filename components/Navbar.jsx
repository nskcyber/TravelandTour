"use client";
import Link from "next/link";
import { useState } from "react";
import { contactInfo } from "@/data/siteData";

const links = [
  { href: "/", label: "Home" },
  { href: "/study-abroad", label: "Study Abroad" },
  { href: "/tours", label: "Tours & Travel" },
  { href: "/visa-services", label: "Visa Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-blue-700">
          🌍 Afri<span className="text-orange-500">Global</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium hover:text-blue-600">
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${contactInfo.phone}`}
          className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white md:block"
        >
          Free Consultation
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">☰</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-2 border-t px-4 py-3 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
