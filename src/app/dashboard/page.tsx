"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/src/components/ui/Skeleton";

export default function DashboardPage() {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Balance Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="glass-panel p-6"
      >
        <h2 className="text-lg font-semibold mb-2">Balance Overview</h2>
       <Skeleton className="h-6 w-32 mb-2" />
  <Skeleton className="h-4 w-48" />

      </motion.div>

      {/* Recent Transactions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="glass-panel p-6"
      >
        <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
       <Skeleton className="h-6 w-32 mb-2" />
  <Skeleton className="h-4 w-48" />

      </motion.div>

      {/* Budgets */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="glass-panel p-6"
      >
        <h2 className="text-lg font-semibold mb-2">Budgets</h2>
        <Skeleton className="h-6 w-32 mb-2" />
  <Skeleton className="h-4 w-48" />

      </motion.div>
    </section>
  );
}