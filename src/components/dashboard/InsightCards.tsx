"use client";

import { useSelector } from "react-redux";
import {
  selectBestSavingMonth,
  selectHighestExpenseMonth,
  selectBestIncomeMonth
} from "@/store/selectors/insightSelectors";


export const InsightCards = () => {
  const bestSaving = useSelector(selectBestSavingMonth);
  const highestExpense = useSelector(selectHighestExpenseMonth);
  const bestIncome = useSelector(selectBestIncomeMonth);

  const Card = ({
    title,
    value,
    subtitle,
    accent
  }: {
    title: string;
    value: string;
    subtitle: string;
    accent: string;
  }) => (
    <div className="glass-panel p-5">
      <p className="text-xs opacity-60 mb-1">{title}</p>
      <p className={`text-xl font-semibold ${accent}`}>
        {value}
      </p>
      <p className="text-xs opacity-50 mt-1">{subtitle}</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card
        title="Best Saving Month"
        value={`$${bestSaving.savings}`}
        subtitle={bestSaving.month}
        accent="text-emerald-400"
      />

      <Card
        title="Highest Expense Month"
        value={`$${highestExpense.expense}`}
        subtitle={highestExpense.month}
        accent="text-red-400"
      />

      <Card
        title="Best Income Month"
        value={`$${bestIncome.income}`}
        subtitle={bestIncome.month}
        accent="text-sky-400"
      />
    </div>
  );
};
