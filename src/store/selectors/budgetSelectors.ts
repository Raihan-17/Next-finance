import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectBudgets = (state: RootState) => state.budgets;

export const selectBudgetProgress = createSelector(
  selectBudgets,
  (budgets) =>
    budgets.map((b) => ({
      category: b.category,
      used: b.used,
      limit: b.limit,
      percentage: Math.round((b.used / b.limit) * 100),
      status:
        b.used / b.limit >= 0.9
          ? "danger"
          : b.used / b.limit >= 0.75
          ? "warning"
          : "safe"
    }))
);
