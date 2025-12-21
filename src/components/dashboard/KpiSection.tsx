"use client";

import { useSelector } from "react-redux";
import {
  selectKPIData
} from "@/store/selectors/dashboardSelectors";
import { RootState } from "@/store/store";
import { KpiCard } from "./KpiCard";
import { UserCard } from "./UserCard";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PiggyBank
} from "lucide-react";

export const KpiSection = () => {
  const kpi = useSelector(selectKPIData);
  const totalBalance = useSelector(
    (state: RootState) => state.user.totalBalance
  );

  if (!kpi) return null;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <UserCard />

      <KpiCard
        title="Total Balance"
        value={`$${totalBalance.toLocaleString()}`}
        icon={<Wallet />}
        accent="blue"
      />

      <KpiCard
        title="Income"
        value={`$${kpi.income}`}
        icon={<TrendingUp />}
        accent="green"
      />

      <KpiCard
        title="Expense"
        value={`$${kpi.expense}`}
        icon={<TrendingDown />}
        accent="red"
      />

      <KpiCard
        title="Savings"
        value={`$${kpi.savings}`}
        icon={<PiggyBank />}
        accent="amber"
      />
    </section>
  );
};
