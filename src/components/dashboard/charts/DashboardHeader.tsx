"use client";

import { useSelector } from "react-redux";
import { selectUser } from "@/store/selectors/dashboardSelectors";

export const DashboardHeader = () => {
  const user = useSelector(selectUser);

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-white/10 bg-base-100/40 backdrop-blur-xl">
      <div>
        <p className="text-xs opacity-60">Overview</p>
        <h1 className="text-sm font-semibold">
          {user.currentMonth} · Week {user.currentWeek}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500" />
        <span className="text-sm">{user.name}</span>
      </div>
    </header>
  );
};
