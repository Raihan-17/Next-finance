import { createSlice } from "@reduxjs/toolkit";
import { monthlySummaryData } from "@/data/monthlysummary";
import { MonthlySummary } from "@/types/finance";

const initialState: MonthlySummary[] = monthlySummaryData;

const monthlySummarySlice = createSlice({
  name: "monthlySummary",
  initialState,
  reducers: {}
});

export default monthlySummarySlice.reducer;
