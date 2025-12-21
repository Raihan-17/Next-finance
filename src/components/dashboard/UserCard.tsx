"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { motion } from "framer-motion";

export const UserCard = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="glass-panel p-4 flex flex-col gap-1"
    >
      <p className="text-xs text-base-content/60">Welcome back</p>
      <p className="font-medium">{user.name}</p>
      <p className="text-xs text-base-content/60">
        Month: {user.currentMonth} · Week {user.currentWeek}
      </p>
    </motion.div>
  );
};
