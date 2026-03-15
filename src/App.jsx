import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import NavbarIcon from "./components/NavbarIcon";
import SettingsMenu from "./components/SettingsMenu";
import { ThemeProvider } from "./context/ThemeContext"; // 1. Import the Provider
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";

function App() {
  // 2. We DELETED the local useEffect here.
  // ThemeContext now handles the .dark class and [data-theme] automatically.

  return (
    <ThemeProvider>
      {" "}
      {/* 3. Wrap everything here */}
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 ease-in-out selection:bg-brand selection:text-white">
        <NavbarIcon />

        <main className="transition-opacity duration-300">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Features />
                  <Contact />
                </>
              }
            />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        <Footer />
        <SettingsMenu />
      </div>
    </ThemeProvider>
  );
}

export default App;
