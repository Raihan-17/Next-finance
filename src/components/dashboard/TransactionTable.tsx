"use client";

import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import {
  makeSelectTransactionTableData,
  TransactionFilter,
  TransactionSort
} from "@/store/selectors/transactionTableSelectors";

export const TransactionsTable = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] =
    useState<TransactionFilter>("all");
  const [sort, setSort] =
    useState<TransactionSort>("date");

  const selector = useMemo(
    () =>
      makeSelectTransactionTableData(
        search,
        filter,
        sort
      ),
    [search, filter, sort]
  );

  const transactions = useSelector(selector);

  return (
    <div className="glass-panel p-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h3 className="text-sm font-medium opacity-80">
          Transactions
        </h3>

        <div className="flex gap-2 flex-wrap">
          <input
            className="input input-sm bg-white/5 border border-white/10"
            placeholder="Search category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="select select-sm bg-white/5 border border-white/10"
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value as TransactionFilter)
            }
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <select
            className="select select-sm bg-white/5 border border-white/10"
            value={sort}
            onChange={(e) =>
              setSort(e.target.value as TransactionSort)
            }
          >
            <option value="date">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-base-content/60">
              <th className="py-2 text-left">Date</th>
              <th className="text-left">Category</th>
              <th className="text-left">Week</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t) => (
              <tr
                key={t.id}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >
                <td className="py-2">
                  {new Date(t.date).toLocaleDateString()}
                </td>

                <td>{t.category}</td>

                <td className="text-xs opacity-60">
                  {t.month} · W{t.week}
                </td>

                <td
                  className={`text-right font-medium ${
                    t.amount < 0
                      ? "text-red-500"
                      : "text-emerald-500"
                  }`}
                >
                  ${Math.abs(t.amount)}
                </td>
              </tr>
            ))}

            {transactions.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-6 text-xs opacity-50"
                >
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
