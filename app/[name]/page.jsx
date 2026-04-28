"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const data = await res.json();
      setCountry(data[0]);
    };

    fetchCountry();
  }, [name]);

  if (!country) return <p>Cargando...</p>;

  return (
    <div className="max-w-xl mx-auto">
      <div className="relative w-full h-64">
        <Image
          src={country.flags.png}
          alt={country.name.common}
          fill
          className="object-cover rounded"
        />
      </div>
      <h1 className="text-2xl font-bold mt-2">
        {country.name.common}
      </h1>
      <p>Capital: {country.capital?.[0]}</p>
      <p>Región: {country.region}</p>
      <p>Población: {country.population.toLocaleString()}</p>
    </div>
  );
}