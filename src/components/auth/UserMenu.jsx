import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Closes the menu if you click anywhere else on the screen
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setIsOpen(false);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const triggerHaptic = () => {
    if ("vibrate" in navigator) navigator.vibrate(10);
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* 1. The Visible Avatar Trigger */}
      <button
        onClick={() => {
          triggerHaptic();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-2 p-1 pr-3 rounded-full bg-tertiary/10 dark:bg-tertiary border border-textsecondary/10 hover:border-brand/50 transition-all cursor-pointer group"
      >
        <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white font-bold shadow-lg shadow-brand/20">
          K
        </div>
        <ChevronDown
          size={16}
          className={`text-textsecondary group-hover:text-brand transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* 2. The Animated Dropdown Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 5, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-2 w-48 bg-primary dark:bg-tertiary rounded-2xl shadow-2xl border border-textsecondary/10 p-2 z-50"
          >
            <div className="px-4 py-3 border-b border-textsecondary/10 mb-1">
              <p className="text-xs text-textsecondary">Signed in as</p>
              <p className="text-sm font-bold text-textmain dark:text-textprimary truncate">
                kegz@git.com
              </p>
            </div>

            <MenuLink
              to="/profile"
              icon={User}
              label="Profile"
              onClick={() => setIsOpen(false)}
            />
            <MenuLink
              to="/settings"
              icon={Settings}
              label="Settings"
              onClick={() => setIsOpen(false)}
            />

            <button
              onClick={() => {
                triggerHaptic();
                console.log("Logout logic here");
              }}
              className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded-xl transition-all cursor-pointer mt-1"
            >
              <LogOut size={18} />
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Internal Helper for Menu Items
function MenuLink({ to, icon: Icon, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-2 text-sm text-textmain dark:text-textsecondary hover:text-brand hover:bg-brand-soft rounded-xl transition-all"
    >
      <Icon size={18} />
      {label}
    </Link>
  );
}
