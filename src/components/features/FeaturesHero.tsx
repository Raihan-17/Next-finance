"use client";

import { motion } from "framer-motion";

export const FeaturesHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-2xl mx-auto"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold text-[#3c7b5f] tracking-tight">
        Features that simplify your finances
      </h1>
      <p className="mt-4 text-[#11e786] text-sm sm:text-base opacity-80">
        Everything you need to track, analyze, and understand your money —
        presented with clarity and a delightful experience.
      </p>
    </motion.div>
  );
};
