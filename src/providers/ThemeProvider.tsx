"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "retro" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  // Load theme from localStorage on mount
useEffect(() => {
  const saved = localStorage.getItem("theme") as Theme | null;
  const initial = saved || "dark";

  setTheme(initial);
  document.documentElement.setAttribute("data-theme", initial);

  // Apply correct background on first load
  document.body.classList.add(initial === "dark" ? "dark-bg" : "retro-bg");
}, []);

  // Toggle theme
const toggleTheme = () => {
  const next = theme === "dark" ? "retro" : "dark";
  setTheme(next);
  localStorage.setItem("theme", next);

  // DaisyUI theme
  document.documentElement.setAttribute("data-theme", next);

  // Background theme classes
  document.body.classList.remove("retro-bg", "dark-bg");
  document.body.classList.add(next === "dark" ? "dark-bg" : "retro-bg");
};

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook for easy access
export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
    return ctx;
};