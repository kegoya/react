import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center justify-between shadow-sm transition-colors">
      {/* Change Logo */}
      <Link to="/" className="flex items-center gap-2">
        <div className="w-14 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">Kegz</span>
        </div>
        <span className="text-xl font-extrabold text-gray-800 dark:text-white">
          Loans App
        </span>
      </Link>

      {/* Change Nav Links */}
      <div className="hidden md:flex space-x-8 font-medium text-gray-600 dark:text-gray-300">
        <Link to="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <Link to="/projects" className="hover:text-blue-600 transition-colors">
          Projects
        </Link>
      </div>

      <ThemeToggle />
      {/* Action Button */}
      <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;
