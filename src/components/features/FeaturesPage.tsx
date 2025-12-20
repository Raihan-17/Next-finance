"use client";

import { FeaturesHero } from "./FeaturesHero";
import { FeatureSection } from "./FeatureSection";
import { BarChart3, CreditCard, LineChart } from "lucide-react";

export const FeaturesPage = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-20">
      <FeaturesHero />

      {/* Center vertical line */}
      <div className="absolute left-1/2 top-[220px] bottom-0 w-px bg-white/15 hidden md:block" />

      <div className="mt-24 space-y-32">
        <FeatureSection
          title="Powerful Analytics"
          description="Understand your income, expenses, and trends through clear visual summaries and insights."
          icon={BarChart3}
        />

        <FeatureSection
          title="Add & Manage Cards"
          description="Add multiple cards, track spending per card, and stay organized effortlessly."
          icon={CreditCard}
          reverse
        />

        <FeatureSection
          title="Smart Insights"
          description="Get monthly summaries, category breakdowns, and habit insights automatically."
          icon={LineChart}
        />
      </div>
    </section>
  );
};
