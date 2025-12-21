import { createSlice } from "@reduxjs/toolkit";
import {budgetsData} from "@/data/budgets";
import { Budget } from "@/types/finance";

const initialState: Budget[] = budgetsData;

const budgetsSlice = createSlice({
  name: "budgets",
  initialState,
  reducers: {}
});

export default budgetsSlice.reducer;
