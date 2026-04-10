import { Outlet } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "../contexts/LanguageContext";

export function Root() {
  return (
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
          <Navigation />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}