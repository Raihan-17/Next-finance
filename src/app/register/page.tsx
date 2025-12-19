"use client";

import { useState } from "react";
import { AuthCard } from "@/src/components/auth/AuthCard";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const image = form.get("image");

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password, image }),
    });

    setLoading(false);

    if (res.ok) router.push("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <AuthCard>
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input name="name" placeholder="Full Name" className="input input-bordered w-full" required />
          <input name="email" placeholder="Email" type="email" className="input input-bordered w-full" required />
          <input
            name="password"
            placeholder="Password"
            type="password"
            className="input input-bordered w-full"
            minLength={6}
            required
          />
          <input name="image" placeholder="Image URL" className="input input-bordered w-full" />

          <button className="btn btn-primary w-full" disabled={loading}>
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm mt-4"
        >
          Already have an account?{" "}
          <a href="/login" className="text-primary underline">Login</a>
        </motion.p>
      </AuthCard>
    </div>
  );
}