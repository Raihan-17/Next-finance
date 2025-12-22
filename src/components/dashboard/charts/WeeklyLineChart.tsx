"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { useSelector } from "react-redux";
import { selectWeeklyChartData } from "@/store/selectors/dashboardSelectors";

export const WeeklyLineChart = () => {
  const data = useSelector(selectWeeklyChartData);

  return (
    <div className="bg-gray-900/50 p-2 h-[320px]">
      <h3 className="text-sm font-medium mb-4 opacity-80">
        Weekly Trend (Current Month)
      </h3>

      <ResponsiveContainer width="100%"  height={280}>
        <LineChart data={data}>
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="Income"
            stroke="#22c55e"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Expense"
            stroke="#ef4444"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Savings"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
