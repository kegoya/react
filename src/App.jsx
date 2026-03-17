import { Route, Routes } from "react-router-dom";
import AuthPage from "./components/auth/AuthPage";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import NavbarIcon from "./components/NavbarIcon";
import SettingsMenu from "./components/SettingsMenu";
import { ThemeProvider } from "./context/ThemeContext"; // 1. Import the Provider
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-primary dark:bg-secondary text-text-main dark:text-text-primary selection:bg-brand selection:text-white transition-colors duration-500  ease-in-out">
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
            <Route path="/auth" element={<AuthPage />} />
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
