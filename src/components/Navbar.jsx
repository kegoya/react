import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Updated Helper: Uses 'text-brand' for the active link
  const navLinkStyles = ({ isActive }) =>
    `transition-colors duration-200 font-semibold ${
      isActive
        ? "text-brand"
        : "text-gray-600 dark:text-gray-300 hover:text-brand"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-450 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 2. LOGO: Uses 'bg-brand' and 'text-brand' */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg shadow-brand/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-xl">K</span>
            </div>
            <span className="text-xl font-black tracking-tight text-gray-900 dark:text-white">
              Kegz<span className="text-brand hidden sm:inline">.git</span>
            </span>
          </Link>

          {/* 3. DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-10">
            <NavLink to="/" className={navLinkStyles}>
              Home
            </NavLink>
            <NavLink to="/projects" className={navLinkStyles}>
              Projects
            </NavLink>
          </div>

          {/* 4. ACTIONS: Uses 'bg-brand' and 'hover:bg-brand-hover' */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Theme Toggle is now relative, so it sits right here */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>
            <button className="hidden md:block bg-brand text-white px-5 py-2.5 rounded-xl font-bold hover:bg-brand-hover hover:shadow-lg hover:shadow-brand/30 active:scale-95 transition-all">
              Get Started
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 5. MOBILE MENU: Added 'hover:text-brand' and 'bg-brand' */}
      <div
        className={`
          md:hidden absolute w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 
          px-6 py-6 flex flex-col space-y-4 shadow-xl transition-all duration-600 ease-in-out origin-top
          ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"}
        `}
      >
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-lg font-semibold dark:text-white hover:text-brand transition-colors"
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          onClick={() => setIsOpen(false)}
          className="text-lg font-semibold dark:text-white hover:text-brand transition-colors"
        >
          Projects
        </NavLink>
        <button className="w-full bg-brand text-white py-4 rounded-xl font-bold shadow-lg shadow-brand/25 active:scale-95 transition-all">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
