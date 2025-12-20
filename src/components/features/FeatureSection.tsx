"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureSectionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  reverse?: boolean;
}

export const FeatureSection = ({
  title,
  description,
  icon: Icon,
  reverse = false,
}: FeatureSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      {/* Visual / Icon side */}
      <div
        className={`flex justify-center ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="
            relative
            w-64 h-40
            glass-panel rounded-2xl
            flex items-center justify-center
          "
        >
          {/* Glow */}
          <div className="absolute inset-0 -z-10 blur-lg  opacity-30 bg-gradient-to-br from-primary to-secondary" />

          <Icon className="h-12 w-12 opacity-80" />
        </motion.div>
      </div>

      {/* Text side */}
      <div
        className={`glass-panel bg-gradient-to-br from-[#3c7b5f] to-[#2c4338] p-6 rounded-2xl ${
          reverse ? "md:order-1" : ""
        }`}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-3 text-sm opacity-80">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
