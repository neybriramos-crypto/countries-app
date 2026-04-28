"use client";

export default function Search({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar país..."
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-2 mb-4 border rounded"
    />
  );
}