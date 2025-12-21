"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const COLORS = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#3b82f6",
  "#a855f7"
];

export const ExpensePieChart = () => {
  const transactions = useSelector(
    (state: RootState) => state.transactions
  );

  const data = Object.values(
    transactions
      .filter((t) => t.amount < 0)
      .reduce((acc: any, t) => {
        acc[t.category] = acc[t.category] || {
          name: t.category,
          value: 0
        };
        acc[t.category].value += Math.abs(t.amount);
        return acc;
      }, {})
  );

  return (
    <div className="glass-panel p-6 h-[320px]">
      <h3 className="text-sm font-medium mb-4 opacity-80">
        Expense Distribution
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={4}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
