import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Projects from "./components/Projects"; // Import the new file

// Let's create a quick "Projects" page component right here for now

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />

      <Routes>
        {/* The "Home" path shows Hero, Features, and Contact */}
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

        {/* The "Projects" path shows only the Projects component */}
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
