"use client";

import { motion } from "framer-motion";

export const AuthCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className=" max-w-md w-full mx-auto p-8 rounded-2xl shadow-xl bg-green-500/20 backdrop-blur-xl"
    >
      {children}
    </motion.div>
  );
};