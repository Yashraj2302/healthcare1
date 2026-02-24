"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            // If successful, redirect to dashboard or home
            window.location.href = "/dashboard";
        } catch (err: any) {
            setError(err.message || "Failed to log in");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex-1 flex items-center justify-center pt-24 pb-12 px-5 min-h-[calc(100vh-320px)]">
            <div className="bg-bg-surface-glass backdrop-blur-[20px] border border-white/50 p-8 md:p-12 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] w-full max-w-[500px] animate-[slideUp_0.5s_ease-out_forwards]">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
                    <p className="text-text-muted">Please sign in to your patient portal</p>
                </div>

                {error && (
                    <div className="bg-danger/10 text-danger border border-danger/20 p-4 rounded-xl mb-6 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-text-main">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="name@example.com"
                            className="w-full p-4 border-2 border-transparent rounded-xl bg-bg-main text-text-main transition-all duration-300 focus:outline-none focus:border-primary-light focus:bg-bg-surface focus:shadow-[0_0_0_4px_rgba(79,70,229,0.1)] placeholder:text-slate-400"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-text-main">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            className="w-full p-4 border-2 border-transparent rounded-xl bg-bg-main text-text-main transition-all duration-300 focus:outline-none focus:border-primary-light focus:bg-bg-surface focus:shadow-[0_0_0_4px_rgba(79,70,229,0.1)] placeholder:text-slate-400"
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2 cursor-pointer text-text-muted hover:text-text-main">
                            <input type="checkbox" className="rounded text-primary focus:ring-primary w-4 h-4" />
                            Remember me
                        </label>
                        <Link href="/forgot-password" className="text-primary hover:text-primary-light font-medium transition-colors">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 text-lg font-bold rounded-xl transition-all duration-300 border-none bg-gradient-to-br from-primary to-primary-light text-white shadow-[0_4px_15px_rgba(79,70,229,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(79,70,229,0.5)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>
                </form>

                <p className="text-center mt-8 text-text-muted">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-primary font-semibold hover:underline">
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    );
}
