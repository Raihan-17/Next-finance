"use client";

import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobile = () => setIsMobileOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/60 backdrop-blur-xl">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-sky-500 shadow-lg shadow-emerald-500/40" />
          <span className="text-sm font-semibold tracking-tight text-slate-50">
            FinScope
          </span>
        </div>

        {/* Center: Desktop nav links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <Link href="/dashboard" className="hover:text-slate-50 transition">
            Dashboard
          </Link>
          <Link href="/transactions" className="hover:text-slate-50 transition">
            Transactions
          </Link>
          <Link href="/budgets" className="hover:text-slate-50 transition">
            Budgets
          </Link>
          <Link href="/settings" className="hover:text-slate-50 transition">
            Settings
          </Link>
        </div>

        {/* Right: placeholder for theme toggle + user/avatar */}
        <div className="hidden md:flex items-center gap-3">
          {/* TODO: ThemeToggle will go here later */}
          <button className="btn btn-ghost btn-xs rounded-full border border-white/10 bg-white/5 backdrop-blur">
            <span className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500" />
            <span className="ml-2 text-xs text-slate-200">Abu</span>
          </button>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-black/30 p-2 text-slate-200"
          onClick={toggleMobile}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-slate-200 rounded-full" />
            <span className="block h-0.5 w-5 bg-slate-200 rounded-full" />
            <span className="block h-0.5 w-5 bg-slate-200 rounded-full" />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/90 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3 text-sm text-slate-200">
            <Link href="/dashboard" onClick={() => setIsMobileOpen(false)}>
              Dashboard
            </Link>
            <Link href="/transactions" onClick={() => setIsMobileOpen(false)}>
              Transactions
            </Link>
            <Link href="/budgets" onClick={() => setIsMobileOpen(false)}>
              Budgets
            </Link>
            <Link href="/settings" onClick={() => setIsMobileOpen(false)}>
              Settings
            </Link>

            {/* Placeholder for theme toggle in mobile */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">Theme</span>
              <button className="btn btn-xs btn-outline rounded-full border-white/30">
                Toggle theme
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};