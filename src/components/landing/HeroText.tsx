"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

export const HeroText = () => {
  const [text] = useTypewriter({
    words: ["finances", "spending", "budgets", "habits"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className=" flex flex-col gap-5 text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
        Track your{" "}
        <span className="text-[#3c7b5f]">
          {text}
        </span>
        <Cursor />
      </h1>

      <p className="max-w-md text-sm sm:text-base opacity-80">
        A modern, glassmorphism-inspired dashboard to visualize income,
        expenses, and financial patterns with clarity.
      </p>

      <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
        <a
          href="/dashboard"
          className="btn bg-[#3c7b5f] rounded-full p-4"
        >
          Go to Dashboard
        </a>
        <a
          href="/features"
          className="btn btn-ghost  p-4 rounded-full border border-[#4c7260] border-2"
        >
          Features
        </a>
      </div>
    </div>
  );
};
