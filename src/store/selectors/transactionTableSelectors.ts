import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { selectTransactions } from "./transactionSelectors";

export type TransactionFilter = "all" | "income" | "expense";
export type TransactionSort = "date" | "amount";

export const makeSelectTransactionTableData = (
  search: string,
  filter: TransactionFilter,
  sort: TransactionSort
) =>
  createSelector(selectTransactions, (transactions) => {
    let data = [...transactions];

    /* search by category */
    if (search) {
      data = data.filter((t) =>
        t.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    /* income / expense filter */
    if (filter !== "all") {
      data = data.filter((t) =>
        filter === "income" ? t.amount > 0 : t.amount < 0
      );
    }

    /* sort */
    data.sort((a, b) => {
      if (sort === "date") {
        return b.date.localeCompare(a.date);
      }
      return Math.abs(b.amount) - Math.abs(a.amount);
    });

    return data;
  });
