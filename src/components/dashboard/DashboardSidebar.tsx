"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  Wallet,
  PiggyBank
} from "lucide-react";

const menu = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3
  },
  {
    label: "Transactions",
    href: "/dashboard/transactions",
    icon: Wallet
  },
  {
    label: "Budgets",
    href: "/dashboard/budgets",
    icon: PiggyBank
  }
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 p-6 border-r border-white/10 glass-panel rounded-none">
      <h2 className="mb-6 text-lg font-semibold">
        Finance Dashboard
      </h2>

      <nav className="flex flex-col gap-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-2 rounded-lg
                transition
                ${active
                  ? "bg-white/10 font-medium"
                  : "hover:bg-white/5"}
              `}
            >
              <Icon className="h-4 w-4 opacity-80" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
