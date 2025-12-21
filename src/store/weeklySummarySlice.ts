import { createSlice } from "@reduxjs/toolkit";
import {weeklySummaryData} from "@/data/weeklySummary";
import { WeeklySummary } from "@/types/finance";

const initialState: WeeklySummary[] = weeklySummaryData;

const weeklySummarySlice = createSlice({
  name: "weeklySummary",
  initialState,
  reducers: {}
});

export default weeklySummarySlice.reducer;
