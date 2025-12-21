"use client";

import { motion } from "framer-motion";
import { BarChart3, Wallet, LineChart } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    title: "Analytics",
    icon: BarChart3,
    //image link
    image: "/statistics.png",
  },
  {
    title: "Transactions",
    icon: Wallet,
    image: "/invest.png",
  },
  {
    title: "Insights",
    icon: LineChart,
    image: "/budget.png",
  },
];

export const HeroCarousel = () => {
  return (
    <div className="relative h-[320px] sm:h-[380px] md:h-[350px] flex items-center justify-center">
      
      {/* Abstract glow */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-br from-primary/40 via-transparent to-secondary/40" />

      {/* Centering wrapper */}
      <div className="relative flex items-center justify-center w-full h-full">
        {cards.map((card, i) => {
          const Icon = card.icon;

          return (
           <motion.div
  key={card.title}
  className="
    absolute
    left-1/2 top-1/2
    -translate-x-1/2 -translate-y-1/2
     w-64 h-40 
    cursor-pointer
    overflow-hidden
    rounded-2xl
    shadow-lg
  "
  animate={{
    x: i === 0 ? -140 : i === 2 ? 140 : 0,
    y: i === 1 ? -30 : 30,
    rotateY: i === 0 ? -12 : i === 2 ? 12 : 0,
  }}
  transition={{
    duration: 0.9,
    ease: "easeOut",
  }}
  whileHover={{
    scale: 1.06,
    rotateY: 0,
  }}
>
  {/* Background image */}
  <Image
    src={card.image}
    alt={card.title}
    fill
    className="object-cover brightness-90"
    priority
  />

  {/* Glass overlay */}
  <div className="
    absolute inset-0
    bg-white/5
    flex items-end p-4
  ">
    <span className="text-sm font-medium">
      {card.title}
    </span>
  </div>
</motion.div>

          );
        })}
      </div>
    </div>
  );
};
