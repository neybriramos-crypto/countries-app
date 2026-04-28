import "./globals.css";
import Navbar from "../components/NavBar";
import { ThemeProvider } from "../context/themeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="es" className="h-full antialiased">
        <body className="min-h-full flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
          <Navbar />
          <main className="flex-1 container mx-auto p-4">
            {children}
          </main>
        </body>
      </html>
    </ThemeProvider>
  );
}