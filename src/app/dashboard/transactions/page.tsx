import { TransactionsTable } from "@/components/dashboard/TransactionTable";

export default function TransactionsPage() {
  return (
    <div className="glass-panel p-6">
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>
      <TransactionsTable />
    </div>
  );
}
