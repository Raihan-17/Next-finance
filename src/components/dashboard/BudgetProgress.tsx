"use client";

import { useSelector } from "react-redux";
import { selectBudgetProgress } from "@/store/selectors/budgetSelectors";

export const BudgetProgress = () => {
  const budgets = useSelector(selectBudgetProgress);

  const getBarColor = (status: string) => {
    switch (status) {
      case "danger":
        return "bg-red-500";
      case "warning":
        return "bg-yellow-400";
      default:
        return "bg-emerald-500";
    }
  };

  const getTextColor = (status: string) => {
    switch (status) {
      case "danger":
        return "text-red-500";
      case "warning":
        return "text-yellow-500";
      default:
        return "text-base-content/70";
    }
  };

  return (
    <div className="glass-panel p-6">
      <h3 className="text-sm font-medium mb-4 opacity-80">
        Budget Usage (This Month)
      </h3>

      <div className="space-y-4">
        {budgets.map((b) => (
          <div key={b.category}>
            {/* Header row */}
            <div className="flex justify-between text-xs mb-1">
              <span>{b.category}</span>
              <span className={getTextColor(b.status)}>
                ${b.used} / ${b.limit}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${getBarColor(
                  b.status
                )}`}
                style={{ width: `${Math.min(b.percentage, 100)}%` }}
              />
            </div>

            {/* Percentage label */}
            <div className="mt-1 text-[10px] text-base-content/50 text-right">
              {b.percentage}% used
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
