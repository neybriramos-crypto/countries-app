"use client";
import { useTheme } from "../context/themeContext";

export default function Navbar() {
  const { dark, setDark } = useTheme();

  return (
    <nav className="p-4 flex justify-between bg-gray-200 dark:bg-gray-800">
      <h1 className="font-bold">Countries App</h1>
      <button
        onClick={() => setDark(!dark)}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        {dark ? "Light" : "Dark"}
      </button>
    </nav>
  );
}