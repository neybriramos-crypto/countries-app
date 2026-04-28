"use client";
import { useTheme } from "../context/themeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"; // Necesitas instalar @heroicons/react

export default function Navbar() {
  const { dark, setDark } = useTheme();

  return (
    <nav className="p-4 flex justify-between items-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 transition-colors border-b dark:border-slate-800">
      <h1 className="font-bold text-xl bg-gradient from-blue-500 to-teal-400 bg-clip-text text-transparent">
        Countries App
      </h1>
      
      <button
        onClick={() => setDark(!dark)}
        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:ring-2 ring-blue-400 transition-all duration-300"
        aria-label="Toggle Theme"
      >
        {dark ? (
          <SunIcon className="h-5 w-5 text-yellow-400" />
        ) : (
          <MoonIcon className="h-5 w-5 text-indigo-600" />
        )}
      </button>
    </nav>
  );
}