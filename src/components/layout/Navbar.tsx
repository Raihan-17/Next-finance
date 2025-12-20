"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/finehub.png";
import { ThemeToggle } from "../theme/ThemeToggle";
import { useSession, signOut } from "next-auth/react";

export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="sticky  top-0 z-40">
      <nav
        className=" glass-panel
          mx-auto flex  items-center justify-between
          px-5 md:px-15 py-3
          bg-base-100/70 backdrop-blur-2xl
          border-b border-white/15
          shadow-lg shadow-black/10
        "
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-1">
          <Image src={logo} alt="FinScope Logo" width={40} height={40} className="rounded-xl" />
          <span className="text-xl font-semibold text-[#3c7b5f] tracking-tight">
            FinScope
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className="hover:text-[#4c7260] transition">
            Home
          </Link>
          <Link href="/features" className="hover:text-[#4c7260] transition">
            Features
          </Link>
          <Link href="/dashboard" className="hover:text-[#4c7260] transition">
            Dashboard
          </Link>
        </div>

        {/* Desktop right section */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          {session?.user ? (
            <div className="flex items-center gap-3 pl-2 border-l border-white/10">
              <span className="text-sm opacity-80">
                {session.user.name}
              </span>
              <button
                onClick={() => signOut()}
                className="
                  btn btn-xs rounded-full
                  bg-[#6b9381] border border-white/20
                  hover:bg-white/20
                "
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="
                btn  rounded-full
                bg-[#3c7b5f] border-none
                hover:bg-[#2c4338]
              "
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen((p) => !p)}
          className="md:hidden rounded-full border border-white/15 p-2 backdrop-blur"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div
          className="
            md:hidden
            bg-base-100/80 backdrop-blur-2xl
            border-b border-white/10
          "
        >
          <div className="flex flex-col gap-4 px-6 py-4 text-sm">
            <Link href="/" onClick={() => setIsMobileOpen(false)}>
              Home
            </Link>
            <Link href="/features" onClick={() => setIsMobileOpen(false)}>
              Features
            </Link>
            <Link href="/dashboard" onClick={() => setIsMobileOpen(false)}>
              Dashboard
            </Link>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs opacity-70">Theme</span>
              <ThemeToggle />
            </div>

            <div className="pt-3 border-t border-white/10">
              {session?.user ? (
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-80">
                    {session.user.name}
                  </span>
                  <button
                    onClick={() => {
                      signOut();
                      setIsMobileOpen(false);
                    }}
                    className="btn btn-xs btn-outline"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setIsMobileOpen(false)}
                  className="btn btn-sm btn-primary w-full"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
