import { Briefcase, House, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function NavbarIcon() {
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
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-450 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 1. LOGO */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg shadow-brand/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-xl">K</span>
            </div>
            <span className="text-xl font-black tracking-tight text-gray-900 dark:text-white hidden sm:inline-block">
              Kegz<span className="text-brand">.git</span>
            </span>
          </Link>

          {/* 2. DESKTOP NAVIGATION (Center) */}
          <div className="hidden md:flex items-center space-x-10">
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

          {/* 3. SHARED ACTION AREA (Right Side) */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* MOBILE ONLY NAVIGATION ICONS */}
            <div className="md:hidden flex items-center gap-7">
              <NavLink to="/" className={navLinkStyles}>
                {({ isActive }) => (
                  <>
                    <House size={22} /> {isActive && <ActiveDot />}
                  </>
                )}
              </NavLink>
              <NavLink to="/projects" className={navLinkStyles}>
                {({ isActive }) => (
                  <>
                    <Briefcase size={22} /> {isActive && <ActiveDot />}
                  </>
                )}
              </NavLink>
              <NavLink to="/about" className={navLinkStyles}>
                {({ isActive }) => (
                  <>
                    <User size={24} /> {isActive && <ActiveDot />}
                  </>
                )}
              </NavLink>
            </div>

            {/* SEPARATOR (Hidden on Mobile, shows on Desktop) */}
            <div className="hidden md:block w-px h-6 bg-gray-200 dark:bg-gray-800" />

            {/* THE TOGGLE (Always visible because it's not inside md:hidden) */}

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarIcon;
