import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Define the modes in the specific order: System, Light, Dark
  const modes = [
    { id: "system", icon: Monitor, label: "System" },
    { id: "light", icon: Sun, label: "Light" },
    { id: "dark", icon: Moon, label: "Dark" },
  ];

  return (
    <div className="flex items-center p-1 bg-tertiary/20 dark:bg-tertiary rounded-full border border-textsecondary/10 w-fit backdrop-blur-sm">
      {modes.map((mode) => {
        const Icon = mode.icon;
        const isActive = theme === mode.id;

        return (
          <button
            key={mode.id}
            onClick={() => setTheme(mode.id)}
            aria-label={`Switch to ${mode.label} mode`}
            className={`
          relative p-2 rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer
          ${
            isActive
              ? "bg-primary dark:bg-secondary shadow-sm text-brand scale-110"
              : "text-textsecondary hover:text-textmain dark:hover:text-textprimary"
          }
        `}
          >
            <Icon
              size={18}
              fill={isActive && mode.id !== "system" ? "currentColor" : "none"}
            />

            {isActive && (
              <span className="absolute -bottom-1 w-1 h-1 bg-current rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}
