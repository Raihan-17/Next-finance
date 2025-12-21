import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactionsSlice";
import monthlySummaryReducer from "./monthlySummarySlice";
import weeklySummaryReducer from "./weeklySummarySlice";
import budgetsReducer from "./budgetsSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    monthlySummary: monthlySummaryReducer,
    weeklySummary: weeklySummaryReducer,
    budgets: budgetsReducer,
    user: userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
