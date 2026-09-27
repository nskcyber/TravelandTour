export default function TourCard({ tour }) {
  return (
    <div className="overflow-hidden rounded-xl border shadow-sm transition hover:shadow-lg">
      <img src={tour.image} alt={tour.title} className="h-48 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-bold">{tour.title}</h3>
        <p className="text-sm text-gray-500">{tour.nights}</p>
        <ul className="mt-2 list-inside list-disc text-sm text-gray-600">
          {tour.includes.map((i) => <li key={i}>{i}</li>)}
        </ul>
        <p className="mt-3 font-bold text-orange-600">{tour.price}</p>
        <a href={`/contact?tour=${tour.title}`} className="mt-3 block rounded-lg bg-orange-500 py-2 text-center font-semibold text-white hover:bg-orange-600">
          Book This Tour
        </a>
      </div>
    </div>
  );
}
