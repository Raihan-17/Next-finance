import { createSlice } from "@reduxjs/toolkit";
import transactions from "@/src/data/transactions.json";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: transactions,
  reducers: {}
});

export default transactionsSlice.reducer;