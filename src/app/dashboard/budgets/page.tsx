import { BudgetProgress } from "@/components/dashboard/BudgetProgress";

export default function BudgetsPage() {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-4">Budgets</h2>
      <BudgetProgress />
    </div>
  );
}
