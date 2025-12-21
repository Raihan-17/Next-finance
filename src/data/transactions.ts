import { Transaction } from "@/types/finance";

export const transactionsData: Transaction[] = [
  { id: "t1", date: "2025-01-03", month: "2025-01", week: 1, category: "Food", amount: -180 },
  { id: "t2", date: "2025-01-06", month: "2025-01", week: 1, category: "Transport", amount: -90 },
  { id: "t3", date: "2025-01-10", month: "2025-01", week: 2, category: "Salary", amount: 3200 },
  { id: "t4", date: "2025-01-15", month: "2025-01", week: 3, category: "Shopping", amount: -420 },
  { id: "t5", date: "2025-02-05", month: "2025-02", week: 1, category: "Salary", amount: 3100 },
  { id: "t6", date: "2025-02-08", month: "2025-02", week: 2, category: "Food", amount: -260 }
];
