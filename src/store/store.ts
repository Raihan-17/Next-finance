import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactionsSlice";
// import budgetsReducer from "./budgetsSlice";
// import balanceReducer from "./balanceSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    // budgets: budgetsReducer,
    // balance: balanceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;