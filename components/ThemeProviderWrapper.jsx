"use client";
import { useTheme } from "../context/themeContext";

export default function ThemeProviderWrapper({ children }) {
  const { dark } = useTheme();

  return (
    <html lang="es" className={`${dark ? "dark" : ""} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}