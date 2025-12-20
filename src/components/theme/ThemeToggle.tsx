"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/src/providers/ThemeProvider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        relative flex items-center justify-center
        h-9 w-9 rounded-full
        bg-[#376451] backdrop-blur
        border border-white/15
        transition-all duration-300
        hover:scale-105
        data-[theme=retro]:hover:bg-accent/20
      "
    >
      {theme === "dark" ? (
        <Moon className="h-4 w-4 text-slate-200" />
      ) : (
        <Sun className="h-4 w-4 text-amber-600" />
      )}
    </button>
  );
};
