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
    // Apply Brand Color
    if (colorTheme === "default") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", colorTheme);
    localStorage.setItem("user-color-brand", colorTheme);

    // Apply Dark/Light Mode
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
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
