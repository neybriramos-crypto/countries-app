export default function CountryCard({ country, onClick }) {
  if (!country) return null;

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-xl border border-border bg-card p-0 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md"
    >
      <div className="h-40 w-full overflow-hidden rounded-t-xl">
        <img
          src={country.flag || "https://via.placeholder.com/150"}
          alt={country.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <h2 className="mb-2 text-lg font-bold leading-tight">{country.name}</h2>
        <div className="space-y-1 text-sm opacity-80">
          <p><span className="font-semibold">Capital:</span> {country.capital}</p>
          <p><span className="font-semibold">Región:</span> {country.region}</p>
          <p><span className="font-semibold">Población:</span> {country.population.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}