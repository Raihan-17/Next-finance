"use client";

import { useState } from "react";
import { AuthCard } from "@/components/auth/AuthCard";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData(e.currentTarget);
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!result) {
      toast.error("No response from server");
      return;
    }

    if (result.error) {
      toast.error("Invalid email or password");
      return;
    }

    toast.success("Login successful!");
    router.push("/");
    router.refresh();
  } catch {
    toast.error("Unexpected error");
  } finally {
    setLoading(false);
  }
};

const handleGoogleSignIn = async () => {
  setGoogleLoading(true);
  try {
    const result = await signIn("google", {
      redirect: false,
      callbackUrl: "/",
    });

    if (!result || result.error) {
      toast.error("Google sign-in failed");
      return;
    }

    toast.success("Signed in with Google!");
    router.push(result.url || "/");
    router.refresh();
  } finally {
    setGoogleLoading(false);
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen px-4 ">
      <AuthCard>
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-600 ">
          Welcome Back
        </h2>
        <p className="text-gray-700  text-center mb-6">
          Sign in to your account
        </p>

        {/* Google Sign In Button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={googleLoading}
          className="btn btn-outline w-full mb-6 flex items-center justify-center gap-3 transform-3d duration-300 hover:scale-105"
        >
          <FcGoogle className="text-xl" />
          <span>{googleLoading ? "Signing in..." : "Sign in with Google"}</span>
        </button>

        <div className="divider text-sm text-gray-600">OR</div>

        {/* Credentials Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-500">Email</span>
            </label>
            <input
              name="email"
              placeholder="your@email.com"
              type="email"
              className="input input-bordered w-full bg-white dark:bg-gray-600"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-500">Password</span>
            </label>
            <input
              name="password"
              placeholder="••••••••"
              type="password"
              className="input input-bordered w-full dark:bg-gray-600"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-neutral transition-3d duration-400 hover:scale-110 w-full mt-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading loading-spinner"></span>
                Logging in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-600 dark:text-gray-600">
          Don&apos;t have an account?{" "}
          <a
            href="/register"
            className="text-primary font-bold hover:underline  transition-3d duration-300 hover:scale-110"
          >
            Create account
          </a>
        </p>
      </AuthCard>
    </div>
  );
}