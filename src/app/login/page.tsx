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

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Invalid email or password");
      } else {
        toast.success("Login successful!");
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
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

      if (result?.error) {
        toast.error("Google sign-in failed");
      } else {
        toast.success("Google sign-in successful!");
        if (result?.url) {
          router.push(result.url);
          router.refresh();
        }
      }
    } catch (error) {
      toast.error("Google sign-in failed");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <AuthCard>
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-800 dark:text-white">
          Welcome Back
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
          Sign in to your account
        </p>

        {/* Google Sign In Button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={googleLoading}
          className="btn btn-outline w-full mb-6 flex items-center justify-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <FcGoogle className="text-xl" />
          <span>{googleLoading ? "Signing in..." : "Sign in with Google"}</span>
        </button>

        <div className="divider text-sm text-gray-500">OR</div>

        {/* Credentials Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">Email</span>
            </label>
            <input
              name="email"
              placeholder="your@email.com"
              type="email"
              className="input input-bordered w-full bg-white dark:bg-gray-800"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">Password</span>
            </label>
            <input
              name="password"
              placeholder="••••••••"
              type="password"
              className="input input-bordered w-full bg-white dark:bg-gray-800"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full mt-2"
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

        <p className="text-center text-sm mt-6 text-gray-600 dark:text-gray-300">
          Don&apos;t have an account?{" "}
          <a
            href="/register"
            className="text-primary font-medium hover:underline transition-colors"
          >
            Create account
          </a>
        </p>
      </AuthCard>
    </div>
  );
}