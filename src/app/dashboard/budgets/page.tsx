import { BudgetProgress } from "@/components/dashboard/BudgetProgress";

export default function BudgetsPage() {
  return (
    <div className="glass-panel p-6">
      <h2 className="text-xl font-semibold mb-4">Budgets</h2>
      <BudgetProgress />
    </div>
  );
}
