import { ExpensePieChart } from "@/components/dashboard/charts/ExpensePieChart";
import { MonthlyBarChart } from "@/components/dashboard/charts/MonthlyBarChart";
import { WeeklyLineChart } from "@/components/dashboard/charts/WeeklyLineChart";

export default function AnalyticsPage() {
  return (
    <div className="glass-panel p-6">
      <h2 className="text-xl font-semibold mb-4">Analytics</h2>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MonthlyBarChart />
              <WeeklyLineChart />
            </div>
      
            <div className="mt-6 ">
              <ExpensePieChart />
              
            </div>
    </div>
  );
}