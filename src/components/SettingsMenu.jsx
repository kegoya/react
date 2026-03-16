import { AnimatePresence, motion } from "framer-motion";
import { Check, Palette, Settings, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext"; // 1. Import your shared hook

const themes = [
  { id: "default", name: "Classic Blue", color: "#2563eb" },
  { id: "sunset", name: "Sunset Orange", color: "#f97316" },
  { id: "midnight", name: "Midnight Purple", color: "#8b5cf6" },
  { id: "emerald", name: "Emerald Green", color: "#10b981" },
];

export default function SettingsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  // 2. Use shared state instead of local useState/useEffect
  const { colorTheme, setColorTheme } = useTheme();

  // 3. Footer Observer (unchanged)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    const footer = document.getElementById("main-footer");
    if (footer) observer.observe(footer);
    return () => footer && observer.unobserve(footer);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isFooterVisible
          ? "translate-y-20 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      {/* 1. Main Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        /* Border updated to match primary/secondary backgrounds */
        className="w-14 h-14 bg-brand text-white rounded-full shadow-2xl flex items-center justify-center border-4 border-primary dark:border-secondary transition-colors cursor-pointer"
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          /* Using your custom spin-slow utility from @theme */
          <Settings size={28} className="animate-spin-slow" />
        )}
      </motion.button>

      {/* 2. The Pop-out Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: -20, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            /* bg-tertiary is your specific color for Menus/Toggles */
            className="absolute bottom-16 right-0 w-64 bg-primary dark:bg-tertiary rounded-3xl shadow-2xl border border-textsecondary/10 p-6 overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-6 text-textmain dark:text-textprimary border-b border-textsecondary/10 pb-4">
              <Palette size={20} className="text-brand" />
              <h3 className="font-bold text-lg">Appearance</h3>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold text-textsecondary uppercase tracking-wider">
                Theme Color
              </p>
              <div className="grid grid-cols-2 gap-3">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setColorTheme(t.id)}
                    className={`group relative flex flex-col items-center gap-2 p-3 rounded-2xl transition-all border-2 cursor-pointer
                  ${
                    colorTheme === t.id
                      ? "border-brand bg-brand-soft"
                      : "border-textsecondary/10 hover:border-brand/50"
                  }`}
                  >
                    <div
                      className="w-8 h-8 rounded-full shadow-inner flex items-center justify-center"
                      style={{ backgroundColor: t.color }}
                    >
                      {colorTheme === t.id && (
                        <Check size={16} className="text-white" />
                      )}
                    </div>
                    <span className="text-[10px] font-medium text-textmain dark:text-textsecondary">
                      {t.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-6 text-center text-[10px] text-textsecondary">
              Changes apply instantly to all sections.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
