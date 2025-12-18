"use client";

import { useTheme } from "@/src/providers/ThemeProvider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-xs rounded-full border border-white/10 bg-white/5 backdrop-blur flex items-center gap-2"
    >
      <span className="text-xs">
        {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
      </span>
    </button>
  );
};