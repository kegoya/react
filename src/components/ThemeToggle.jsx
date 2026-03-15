import { Monitor, Moon, Settings, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext"; // 1. Import your new context hook

export default function ThemeToggle() {
  // 2. Pull EVERYTHING from the shared Context
  const { theme, setTheme, colorTheme, setColorTheme } = useTheme();

  // 3. Helper for UI logic (now inside the component for reactivity)
  const isDarkUI =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const handleCycleDarkMode = () => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  };

  return (
    <div className="relative group flex items-center">
      {/* Main Toggle Button */}
      <button
        onClick={handleCycleDarkMode}
        className={`
          p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center shadow-sm
          ${
            isDarkUI
              ? "bg-gray-800 text-yellow-400 border-gray-700"
              : "bg-white text-brand border-gray-200"
          }
          hover:scale-105 active:scale-95
        `}
      >
        <div className="relative flex items-center justify-center">
          <Settings
            className="animate-[spin_8s_linear_infinite] opacity-20 group-hover:opacity-100 transition-opacity"
            size={20}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {theme === "system" && <Monitor size={14} />}
            {theme === "light" && <Sun size={14} fill="currentColor" />}
            {theme === "dark" && <Moon size={14} fill="currentColor" />}
          </div>
        </div>
      </button>

      {/* Color Palette Menu (Pops down on hover) */}
      <div className="absolute top-full right-0 mt-2 flex gap-2 p-2 bg-white dark:bg-gray-800 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
        {["default", "sunset", "midnight", "emerald"].map((t) => (
          <button
            key={t}
            onClick={() => setColorTheme(t)} // 4. This now updates the SettingsMenu instantly!
            className={`w-6 h-6 rounded-full border-2 ${colorTheme === t ? "border-brand scale-110" : "border-transparent hover:scale-110 transition-transform"}`}
            style={{
              backgroundColor:
                t === "default"
                  ? "#2563eb"
                  : t === "sunset"
                    ? "#f97316"
                    : t === "midnight"
                      ? "#8b5cf6"
                      : "#10b981",
            }}
            title={t.charAt(0).toUpperCase() + t.slice(1)}
          />
        ))}
      </div>
    </div>
  );
}
