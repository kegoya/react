import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Check, Palette, Settings, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const themes = [
  { id: "default", name: "Classic Blue", color: "#2563eb" },
  { id: "sunset", name: "Sunset Orange", color: "#f97316" },
  { id: "midnight", name: "Midnight Purple", color: "#8b5cf6" },
  { id: "emerald", name: "Emerald Green", color: "#10b981" },
];

export default function SettingsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const { colorTheme, setColorTheme } = useTheme();

  // Motion values for drag-to-close feel
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 100], [1, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    const footer = document.getElementById("main-footer");
    if (footer) observer.observe(footer);
    return () => footer && observer.unobserve(footer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = () => setIsOpen(false);
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  const handleThemeSelect = (themeId) => {
    setColorTheme(themeId);
    setTimeout(() => setIsOpen(false), 400);
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isFooterVisible
          ? "translate-y-20 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      {/* 1. Toggle Button with subtle spring */}
      <motion.button
        layout
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand text-white rounded-full shadow-2xl flex items-center justify-center border-4 border-primary dark:border-secondary cursor-pointer relative z-10"
      >
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Settings size={28} className="animate-spin-slow" />
          )}
        </motion.div>
      </motion.button>

      {/* 2. Interactive Draggable Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: -20, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" }}
            // Drag Configuration
            drag
            dragConstraints={{ left: -100, right: 0, top: -200, bottom: 0 }}
            dragElastic={0.1}
            style={{ y, opacity }}
            onDragEnd={(_, info) => {
              // If dragged down significantly, close the menu
              if (info.offset.y > 50) setIsOpen(false);
            }}
            className="absolute bottom-16 right-0 w-64 bg-primary dark:bg-tertiary rounded-3xl shadow-2xl border border-textsecondary/10 p-6 overflow-hidden cursor-grab active:cursor-grabbing"
          >
            {/* Drag Handle (Visual cue) */}
            <div className="w-12 h-1 bg-textsecondary/20 rounded-full mx-auto mb-4" />

            <div className="flex items-center gap-2 mb-6 text-textmain dark:text-textprimary border-b border-textsecondary/10 pb-4">
              <Palette size={20} className="text-brand" />
              <h3 className="font-bold text-lg pointer-events-none">
                Appearance
              </h3>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold text-textsecondary uppercase tracking-wider pointer-events-none">
                Theme Color
              </p>
              <div className="grid grid-cols-2 gap-3">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleThemeSelect(t.id)}
                    className={`group relative flex flex-col items-center gap-2 p-3 rounded-2xl transition-all border-2 cursor-pointer
                      ${colorTheme === t.id ? "border-brand bg-brand-soft" : "border-textsecondary/10 hover:border-brand/50"}`}
                  >
                    <div
                      className="w-8 h-8 rounded-full shadow-inner flex items-center justify-center"
                      style={{ backgroundColor: t.color }}
                    >
                      {colorTheme === t.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <Check size={16} className="text-white" />
                        </motion.div>
                      )}
                    </div>
                    <span className="text-[10px] font-medium text-textmain dark:text-textsecondary">
                      {t.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-6 text-center text-[10px] text-textsecondary pointer-events-none">
              Drag down to close.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
