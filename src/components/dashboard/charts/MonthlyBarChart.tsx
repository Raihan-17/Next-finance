"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { useSelector } from "react-redux";
import { selectMonthlyChartData } from "@/store/selectors/dashboardSelectors";

export const MonthlyBarChart = () => {
  const data = useSelector(selectMonthlyChartData);

  return (
    <div className="glass-panel p-6 h-[320px]">
      <h3 className="text-sm font-medium mb-4 opacity-80">
        Monthly Performance
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="Income" fill="#22c55e" radius={[4,4,0,0]} />
          <Bar dataKey="Expense" fill="#ef4444" radius={[4,4,0,0]} />
          <Bar dataKey="Savings" fill="#3b82f6" radius={[4,4,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
