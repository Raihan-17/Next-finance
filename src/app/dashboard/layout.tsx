"use client";

import { ReactNode, useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Menu } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/charts/DashboardHeader";

export default function DashboardLayout({
  children
}: {
  children: ReactNode;
}) {
  
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block">
        <DashboardSidebar />
      </aside>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <aside
        className={`
          fixed z-50 inset-y-0 left-0 w-64
          transform transition-transform duration-300
          md:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <DashboardSidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="md:hidden h-14 flex items-center px-4 border-b border-white/10 glass-panel">
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-lg hover:bg-white/10"
          >
            <Menu className="h-5 w-5" />
          </button>

          <span className="ml-3 font-medium">
            Dashboard
          </span>
        </header>

        {/* Page Content */}
        <DashboardHeader/>
        <main className="flex-1 p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
