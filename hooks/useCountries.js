"use client";
import { useEffect, useState } from "react";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags"
        );

        const data = await res.json();

        if (Array.isArray(data)) {
          const formatted = data.map((c) => ({
            name: c.name?.common || "N/A",
            capital: c.capital?.[0] || "N/A",
            region: c.region || "N/A",
            population: c.population || 0,
            flag: c.flags?.png || "https://via.placeholder.com/150"
          }));

          setCountries(formatted);
        } else {
          console.error("Respuesta inválida:", data);
          setCountries([]);
        }

      } catch (error) {
        console.error("Error:", error);
        setCountries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading };
};