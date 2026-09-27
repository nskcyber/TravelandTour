import TourCard from "@/components/TourCard";
import { tours } from "@/data/siteData";

export const metadata = { title: "Holiday Tours & Travel Packages" };

export default function Tours() {
  return (
    <>
      <section className="bg-orange-500 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Tours & Travel ✈️</h1>
        <p className="mt-2">Group tours, honeymoons and holiday packages — flights, visas & hotels sorted.</p>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((t) => <TourCard key={t.id} tour={t} />)}
        </div>
        <p className="mt-8 text-center text-gray-600">
          ✅ Visa assistance included on all international packages • Flexible installment payment available
        </p>
      </section>
    </>
  );
}
