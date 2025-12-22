"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/finehub.png";
import { Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Gradient background */}
      <div
        className="
          relative  bg-gradient-to-b
    from-[#0d4a36] to-[#222d2a]
    
    border-t border-black dark:border-white/15
         
        "
      >
        {/* Subtle line pattern */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
            dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
            bg-[size:40px_40px]
          "
        />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 md:px-16 py-12">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Image
                  src={logo}
                  alt="FinScope logo"
                  width={36}
                  height={36}
                  className="rounded-lg"
                />
                <span className="text-2xl font-semibold ">
                  FinScope
                </span>
              </div>

              <p className="text-sm opacity-70 max-w-xs">
                Track income, expenses, budgets and insights —
                thoughtfully designed for clarity and control.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6 opacity-80" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6 opacity-80" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6 opacity-80" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div className="space-y-2">
                <h4 className="font-medium">Product</h4>
                <ul className="space-y-1 opacity-75">
                  <li>
                    <Link href="/features" className="hover:text-[#4c7260]">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard" className="hover:text-[#4c7260]">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-[#4c7260]">
                      Roadmap
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Company</h4>
                <ul className="space-y-1 opacity-75">
                  <li>
                    <Link href="/" className="hover:text-[#4c7260]">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-[#4c7260]">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-[#4c7260]">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Meta */}
            <div className="flex flex-col justify-between text-sm">
              <p className="opacity-70">
                Built with Next.js, Redux & Tailwind.
              </p>

              <p className="mt-6 text-xs opacity-50">
                © {new Date().getFullYear()} FinScope. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
