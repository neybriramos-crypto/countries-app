"use client";
import { useTheme } from "../context/themeContext";

export default function Navbar() {
  const { dark, setDark } = useTheme();

  return (
    <nav className="p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-700 transition-colors">
      <h1 className="font-bold text-xl">Countries App</h1>
      <button
        onClick={() => setDark(!dark)}
        className="px-4 py-2 rounded-full font-semibold transition-all 
                   bg-gray-800 text-white dark:bg-yellow-400 dark:text-black
                   hover:opacity-90 active:scale-95"
      >
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}