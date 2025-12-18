import Image from "next/image";

export default function Home() {
  return (
   <section className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-50 tracking-tight">
        Personal Finance Dashboard
      </h1>
      <p className="max-w-xl text-sm sm:text-base text-slate-300">
        A modern, glassmorphism-inspired dashboard to track your income, expenses, and budgets with a delightful UX.
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <a href="/dashboard" className="btn btn-primary btn-sm rounded-full px-5">
          Go to dashboard
        </a>
        <a href="/login" className="btn btn-ghost btn-sm rounded-full border border-white/20">
          Login
        </a>
      </div>
    </section>

  );
}
