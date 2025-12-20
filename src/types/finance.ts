// Transaction
export interface Transaction {
  id: string;
  date: string;
  month: string;
  week: number;
  category: string;
  amount: number;
}

// Monthly summary
export interface MonthlySummary {
  month: string;
  income: number;
  expense: number;
  savings: number;
}

// Weekly summary
export interface WeeklySummary {
  week: number;
  month: string;
  income: number;
  expense: number;
  savings: number;
}

// Budget
export interface Budget {
  category: string;
  limit: number;
  used: number;
}

// User
export interface UserProfile {
  name: string;
  currentMonth: string;
  currentWeek: number;
  totalBalance: number;
}
