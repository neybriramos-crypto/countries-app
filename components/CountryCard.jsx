export default function CountryCard({ country, onClick }) {
  if (!country) return null;

  return (
    <div
      onClick={onClick}
      className="p-4 rounded shadow bg-white dark:bg-gray-700 cursor-pointer"
    >
      <img
        src={country.flag || "https://via.placeholder.com/150"}
        alt={country.name}
        className="w-full h-32 object-cover rounded"
      />

      <h2 className="font-bold mt-2">{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Región: {country.region}</p>
      <p>Población: {country.population.toLocaleString()}</p>
    </div>
  );
}