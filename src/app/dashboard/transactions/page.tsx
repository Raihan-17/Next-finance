import { TransactionsTable } from "@/components/dashboard/TransactionTable";

export default function TransactionsPage() {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
      <TransactionsTable />
    </div>
  );
}
