import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import TourCard from "@/components/TourCard";
import Testimonials from "@/components/Testimonials";
import { programs, tours } from "@/data/siteData";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-center text-3xl font-bold">Popular Study Destinations</h2>
        <p className="mt-2 text-center text-gray-600">
          From Accra to Lagos to Toronto — we process admissions and visas end-to-end.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => <ProgramCard key={p.country} program={p} />)}
        </div>
        <div className="mt-8 text-center">
          <Link href="/study-abroad" className="font-semibold text-blue-600 hover:underline">
            View all study destinations →
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold">Featured Tour Packages</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tours.map((t) => <TourCard key={t.id} tour={t} />)}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
