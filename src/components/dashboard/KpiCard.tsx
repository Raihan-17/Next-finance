"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface KpiCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  accent?: "green" | "red" | "blue" | "amber";
}

const accentMap = {
  green: "from-emerald-600/50 to-emerald-600/20",
  red: "from-rose-400/80 to-rose-600/30",
  blue: "from-sky-600/60 to-sky-600/20",
  amber: "from-amber-600/60 to-amber-600/20"
};

export const KpiCard = ({
  title,
  value,
  icon,
  accent = "blue"
}: KpiCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`
        glass-panel
        relative overflow-hidden
        p-5 flex items-center justify-between
      `}
    >
      {/* Accent glow */}
      <div
        className={`
          absolute inset-0 -z-10
          bg-gradient-to-br ${accentMap[accent]}
          blur-md opacity-40
        `}
      />

      <div>
        <p className="text-xs text-base-content/60">{title}</p>
        <p className="text-xl font-semibold mt-1">{value}</p>
      </div>

      <div className="opacity-70">{icon}</div>
    </motion.div>
  );
};
