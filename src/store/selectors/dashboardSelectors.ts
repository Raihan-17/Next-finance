import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

/* ---------- BASE ---------- */

export const selectUser = (state: RootState) => state.user;
export const selectMonthlySummary = (state: RootState) => state.monthlySummary;
export const selectWeeklySummary = (state: RootState) => state.weeklySummary;

/* CURRENT CONTEXT */

export const selectCurrentMonth = createSelector(
  selectUser,
  (user) => user.currentMonth
);

export const selectCurrentWeek = createSelector(
  selectUser,
  (user) => user.currentWeek
);

//kpi cards
/* ---------- KPI CARDS ---------- */

export const selectCurrentMonthSummary = createSelector(
  [selectMonthlySummary, selectCurrentMonth],
  (months, currentMonth) =>
    months.find((m) => m.month === currentMonth)
);

export const selectKPIData = createSelector(
  selectCurrentMonthSummary,
  (summary) => {
    if (!summary) return null;

    return {
      income: summary.income,
      expense: summary.expense,
      savings: summary.savings
    };
  }
);

//performance charts


export const selectBestSavingMonth = createSelector(
  selectMonthlySummary,
  (months) =>
    months.reduce((best, m) =>
      m.savings > best.savings ? m : best
    )
);

export const selectHighestExpenseMonth = createSelector(
  selectMonthlySummary,
  (months) =>
    months.reduce((worst, m) =>
      m.expense > worst.expense ? m : worst
    )
);

/* ---------- CHARTS ---------- */

export const selectMonthlyChartData = createSelector(
  selectMonthlySummary,
  (months) =>
    months.map((m) => ({
      month: m.month,
      Income: m.income,
      Expense: m.expense,
      Savings: m.savings
    }))
);

export const selectWeeklyChartData = createSelector(
  [selectWeeklySummary, selectCurrentMonth],
  (weeks, currentMonth) =>
    weeks
      .filter((w) => w.month === currentMonth)
      .map((w) => ({
        week: `Week ${w.week}`,
        Income: w.income,
        Expense: w.expense,
        Savings: w.savings
      }))
);
