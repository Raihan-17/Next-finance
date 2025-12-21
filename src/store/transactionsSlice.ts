import { createSlice } from "@reduxjs/toolkit";
import {transactionsData} from "@/data/transactions";
import { Transaction } from "@/types/finance";

const initialState: Transaction[] = transactionsData;

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {}
});

export default transactionsSlice.reducer;
