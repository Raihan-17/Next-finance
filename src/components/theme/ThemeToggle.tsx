"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";

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
        
        transition-all duration-300
        hover:scale-115
        data-[theme=retro]:hover:bg-accent/20
      "
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5 text-slate-200" />
      ) : (
        <Sun className="h-5 w-5 text-amber-300" />
      )}
    </button>
  );
};
