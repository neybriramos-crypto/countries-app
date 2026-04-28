"use client";
import { useCountries } from "../hooks/useCountries";
import CountryCard from "../components/CountryCard";
import Search from "../components/Search";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { countries, loading } = useCountries();
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filtered = countries.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <Search setSearch={setSearch} />

      <div className="grid md:grid-cols-3 gap-4">
        {filtered.map((c, index) => (
          <CountryCard
            key={index}
            country={c}
            onClick={() => router.push(`/country/${c.name}`)}
          />
        ))}
      </div>
    </div>
  );
}