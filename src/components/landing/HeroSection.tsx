"use client";

import { motion } from "framer-motion";
import { HeroText } from "./HeroText";
import { HeroCarousel } from "./HeroCarousel";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className=" mx-auto w-11/12 px- py-5">
        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-2">

          {/* Left: Text (2/5) */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroText />
          </motion.div>

          {/* Right: Carousel (3/5) */}
          <motion.div
            className="md:col-span-3 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
