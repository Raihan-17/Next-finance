"use client";

import { useState } from "react";
import { AuthCard } from "@/components/auth/AuthCard";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const image = formData.get("image") as string;

    try {
      // 1. Register the user
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, image }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Registration failed");
      }

      // 2. Automatically sign in the user
      const signInResult = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (signInResult?.error) {
        toast.error("Registration successful! Please login manually.");
        router.push("/login");
      } else {
        toast.success("Account created successfully! Welcome!");
        router.push("/");
        router.refresh();
      }
    } catch (error: any) {
      toast.error(error.message || "Registration failed. Please try again.");
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
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <AuthCard>
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-800 dark:text-white">
          Create Account
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
          Join our finance community
        </p>

        {/* Google Sign Up Button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={googleLoading}
          className="btn btn-outline w-full mb-6 flex items-center justify-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <FcGoogle className="text-xl" />
          <span>{googleLoading ? "Creating account..." : "Sign up with Google"}</span>
        </button>

        <div className="divider text-sm text-gray-500">OR</div>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div>
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">Full Name</span>
            </label>
            <input
              name="name"
              placeholder="John Doe"
              className="input input-bordered w-full bg-white dark:bg-gray-800"
              required
            />
          </div>

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
              minLength={6}
              required
            />
            <label className="label">
              <span className="label-text-alt text-gray-500">Minimum 6 characters</span>
            </label>
          </div>

          <div>
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">
                Profile Image URL <span className="text-gray-500">(Optional)</span>
              </span>
            </label>
            <input
              name="image"
              placeholder="https://example.com/your-photo.jpg"
              className="input input-bordered w-full bg-white dark:bg-gray-800"
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
                Creating account...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm mt-6 text-gray-600 dark:text-gray-300"
        >
          Already have an account?{" "}
          <a
            href="/login"
            className="text-primary font-medium hover:underline transition-colors"
          >
            Sign in
          </a>
        </motion.p>
      </AuthCard>
    </div>
  );
}