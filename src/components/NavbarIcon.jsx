import { Briefcase, House, User } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UserMenu from "./auth/UserMenu"; // Use the correct path to the file you just created
import ThemeToggle from "./ThemeToggle";

function NavbarIcon() {
  // In NavbarIcon.jsx
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Temporary for testing

  const navLinkStyles = ({ isActive }) =>
    `relative flex flex-col items-center gap-1 transition-colors duration-200 ${
      isActive
        ? "text-brand"
        : "text-gray-500 dark:text-gray-400 hover:text-brand"
    }`;

  const ActiveDot = () => (
    <div className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_rgba(var(--brand-rgb),0.6)] animate-in fade-in zoom-in duration-300" />
  );

  return (
    <nav className="sticky top-0 z-50 bg-primary/80 dark:bg-secondary/80 backdrop-blur-md border-b border-textsecondary/10 transition-colors duration-500">
      {/* 1. FIXED: Changed max-w-450 to max-w-7xl to give the bar breathing room */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* LEFT: Logo (Shrink-0 prevents it from being crushed) */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center shadow-lg shadow-brand/20 transition-transform">
              <span className="text-white font-black text-lg">K</span>
            </div>
            <span className="text-lg font-black tracking-tight text-textmain dark:text-textprimary hidden sm:inline-block">
              Kegz<span className="text-brand">.git</span>
            </span>
          </Link>

          {/* CENTER: Navigation (Desktop text vs Mobile icons) */}
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10 font-semibold text-textmain dark:text-textprimary">
              <NavLink to="/" className={navLinkStyles}>
                {({ isActive }) => <>Home {isActive && <ActiveDot />}</>}
              </NavLink>
              <NavLink to="/projects" className={navLinkStyles}>
                {({ isActive }) => <>Projects {isActive && <ActiveDot />}</>}
              </NavLink>
              <NavLink to="/about" className={navLinkStyles}>
                {({ isActive }) => <>About {isActive && <ActiveDot />}</>}
              </NavLink>
            </div>

            {/* Mobile Icons - Smaller gap (gap-4) to fit better */}
            <div className="md:hidden flex items-center gap-4 text-textmain dark:text-textprimary">
              <NavLink to="/" className={navLinkStyles}>
                {({ isActive }) => (
                  <>
                    <House size={18} /> {isActive && <ActiveDot />}
                  </>
                )}
              </NavLink>
              <NavLink to="/projects" className={navLinkStyles}>
                {({ isActive }) => (
                  <>
                    <Briefcase size={18} /> {isActive && <ActiveDot />}
                  </>
                )}
              </NavLink>
              <NavLink to="/about" className={navLinkStyles}>
                {({ isActive }) => (
                  <>
                    <User size={20} /> {isActive && <ActiveDot />}
                  </>
                )}
              </NavLink>
            </div>
          </div>

          {/* RIGHT: Action Area (Auth + Toggle) */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <div className="hidden sm:block w-px h-6 bg-textsecondary/20" />
            <ThemeToggle />
            <div className="flex items-center">
              {isLoggedIn ? (
                <UserMenu />
              ) : (
                <Link
                  to="/auth"
                  /* Reduced mobile padding (px-3 py-1.5) and font (text-[10px]) */
                  className="px-3 py-1.5 sm:px-5 sm:py-2 bg-brand text-white text-[10px] sm:text-xs font-bold rounded-xl hover:bg-brand-hover shadow-lg shadow-brand/20 transition-all active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarIcon;
