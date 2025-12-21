import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

/* base */
export const selectMonthlySummary = (state: RootState) =>
  state.monthlySummary;

/* Best saving month */
export const selectBestSavingMonth = createSelector(
  selectMonthlySummary,
  (months) =>
    months.reduce((best, m) =>
      m.savings > best.savings ? m : best
    )
);

/* Highest expense month */
export const selectHighestExpenseMonth = createSelector(
  selectMonthlySummary,
  (months) =>
    months.reduce((worst, m) =>
      m.expense > worst.expense ? m : worst
    )
);

/* Best income month */
export const selectBestIncomeMonth = createSelector(
  selectMonthlySummary,
  (months) =>
    months.reduce((best, m) =>
      m.income > best.income ? m : best
    )
);
