import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState(
    () => localStorage.getItem("user-color-brand") || "default",
  );
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "system",
  );

  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      // Brand Color Logic
      if (colorTheme === "default") root.removeAttribute("data-theme");
      else root.setAttribute("data-theme", colorTheme);
      localStorage.setItem("user-color-brand", colorTheme);

      // Dark/Light Logic
      const isDark =
        theme === "dark" || (theme === "system" && mediaQuery.matches);
      root.classList.toggle("dark", isDark);
      localStorage.setItem("theme", theme);
    };

    applyTheme();

    // Listen for system changes if mode is 'system'
    if (theme === "system") {
      mediaQuery.addEventListener("change", applyTheme);
      return () => mediaQuery.removeEventListener("change", applyTheme);
    }
  }, [colorTheme, theme]);

  return (
    <ThemeContext.Provider
      value={{ colorTheme, setColorTheme, theme, setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
