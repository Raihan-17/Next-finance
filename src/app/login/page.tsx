"use client";

import { useState } from "react";
import { AuthCard } from "@/src/components/auth/AuthCard";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (!res?.error) router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <AuthCard>
        <h2 className="text-2xl font-semibold mb-6 text-center">Welcome Back</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input name="email" placeholder="Email" type="email" className="input input-bordered w-full" required />
          <input name="password" placeholder="Password" type="password" className="input input-bordered w-full" required />

          <button className="btn btn-primary w-full" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          New here?{" "}
          <a href="/register" className="text-primary underline">Create an account</a>
        </p>
      </AuthCard>
    </div>
  );
}