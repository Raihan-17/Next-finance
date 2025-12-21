import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

/* ---------- BASE ---------- */

export const selectTransactions = (state: RootState) =>
  state.transactions;

/* ---------- CATEGORY PIE ---------- */

export const selectCategorySpending = createSelector(
  selectTransactions,
  (transactions) => {
    const map: Record<string, number> = {};

    transactions.forEach((t) => {
      if (t.amount < 0) {
        map[t.category] = (map[t.category] || 0) + Math.abs(t.amount);
      }
    });

    return Object.entries(map).map(([name, value]) => ({
      name,
      value
    }));
  }
);

export const selectRecentTransactions = createSelector(
  selectTransactions,
  (transactions) =>
    [...transactions]
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, 10)
);

