// "use client";

// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/store";
// import { motion } from "framer-motion";

// export default function DashboardPage() {
//   const transactions = useSelector((state: RootState) => state.transactions);
//   const [activeTab, setActiveTab] = useState<"balance" | "transactions" | "budgets">("balance");

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-base-200 border-r border-base-300 p-6">
//         <nav className="flex flex-col gap-4">
//           <button
//             onClick={() => setActiveTab("balance")}
//             className={`text-left px-4 py-2 rounded-lg ${
//               activeTab === "balance" ? "bg-base-300 font-semibold" : "hover:bg-base-300"
//             }`}
//           >
//             Balance Overview
//           </button>
//           <button
//             onClick={() => setActiveTab("transactions")}
//             className={`text-left px-4 py-2 rounded-lg ${
//               activeTab === "transactions" ? "bg-base-300 font-semibold" : "hover:bg-base-300"
//             }`}
//           >
//             Transactions
//           </button>
//           <button
//             onClick={() => setActiveTab("budgets")}
//             className={`text-left px-4 py-2 rounded-lg ${
//               activeTab === "budgets" ? "bg-base-300 font-semibold" : "hover:bg-base-300"
//             }`}
//           >
//             Budgets
//           </button>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {activeTab === "balance" && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="glass-panel p-6"
//           >
//             <h2 className="text-xl font-semibold mb-4">Balance Overview</h2>
//             <p className="text-sm text-base-content/70">Dummy balance data will go here.</p>
//           </motion.div>
//         )}

//         {activeTab === "transactions" && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="glass-panel p-6"
//           >
//             <h2 className="text-xl font-semibold mb-4">Transactions</h2>
//             <ul className="space-y-2 text-sm">
//               {transactions.map((t) => (
//                 <li key={t.id} className="flex justify-between border-b border-base-300 pb-1">
//                   <span>{t.date} — {t.category}</span>
//                   <span className={t.amount < 0 ? "text-red-500" : "text-green-500"}>
//                     ${t.amount}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}

//         {activeTab === "budgets" && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="glass-panel p-6"
//           >
//             <h2 className="text-xl font-semibold mb-4">Budgets</h2>
//             <p className="text-sm text-base-content/70">Dummy budget data will go here.</p>
//           </motion.div>
//         )}
//       </main>
//     </div>
//   );
// }

import { KpiSection } from "@/components/dashboard/KpiSection";
import { MonthlyBarChart } from "@/components/dashboard/charts/MonthlyBarChart";
import { WeeklyLineChart } from "@/components/dashboard/charts/WeeklyLineChart";
import { ExpensePieChart } from "@/components/dashboard/charts/ExpensePieChart";
import { BudgetProgress } from "@/components/dashboard/BudgetProgress";
import { TransactionsTable } from "@/components/dashboard/TransactionTable";
import { InsightCards } from "@/components/dashboard/InsightCards";

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-6">
      <KpiSection />
      <InsightCards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MonthlyBarChart />
        <WeeklyLineChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ExpensePieChart />
        <BudgetProgress />
      </div>

      <TransactionsTable />

    </div>
  );
}
