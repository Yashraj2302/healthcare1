"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccessMsg(null);

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            const { data, error: authError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        first_name: firstName,
                        last_name: lastName,
                        phone: phone,
                    },
                },
            });

            if (authError) throw authError;

            setSuccessMsg("Registration successful! Please check your email to verify your account.");
            // Optional: Redirect to login or auto-login
            // window.location.href = "/dashboard";
        } catch (err: any) {
            setError(err.message || "Failed to sign up");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex-1 flex items-center justify-center pt-24 pb-12 px-5 min-h-[calc(100vh-320px)]">
            <div className="bg-bg-surface-glass backdrop-blur-[20px] border border-white/50 p-8 md:p-12 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] w-full max-w-[600px] animate-[slideUp_0.5s_ease-out_forwards]">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Create an Account</h2>
                    <p className="text-text-muted">Join our patient portal to manage your health securely.</p>
                </div>

                {error && (
                    <div className="bg-danger/10 text-danger border border-danger/20 p-4 rounded-xl mb-6 text-sm">
                        {error}
                    </div>
                )}

                {successMsg && (
                    <div className="bg-success/10 text-success border border-success/20 p-4 rounded-xl mb-6 text-sm">
                        {successMsg}
                    </div>
                )}

                <form onSubmit={handleSignUp} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="block text-sm font-medium text-text-main">First Name</label>
                            <input
                                type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required placeholder="John"
                                className="w-full p-4 border-2 border-transparent rounded-xl bg-bg-main text-text-main transition-all duration-300 focus:outline-none focus:border-primary-light focus:bg-bg-surface focus:shadow-[0_0_0_4px_rgba(79,70,229,0.1)] placeholder:text-slate-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lastName" className="block text-sm font-medium text-text-main">Last Name</label>
                            <input
                                type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required placeholder="Doe"
                                className="w-full p-4 border-2 border-transparent rounded-xl bg-bg-main text-text-main transition-all duration-300 focus:outline-none focus:border-primary-light focus:bg-bg-surface focus:shadow-[0_0_0_4px_rgba(79,70,229,0.1)] placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-text-main">Email Address</label>
                        <input
                            type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="name@example.com"
                            className="w-full p-4 border-2 border-transparent rounded-xl bg-bg-main text-text-main transition-all duration-300 focus:outline-none focus:border-primary-light focus:bg-bg-surface focus:shadow-[0_0_0_4px_rgba(79,70,229,0.1)] placeholder:text-slate-400"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-text-main">Phone Number</label>
                        <input
                            type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="(123) 456-7890"
                            className="w-full p-4 border-2 border-transparent rounded-xl bg-bg-main text-text-main transition-all duration-300 focus:outline-none focus:border-primary-light focus:bg-bg-surface focus:shadow-[0_0_0_4px_rgba(79,70,229,0.1)] placeholder:text-slate-400"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-text-main">Password</label>
                        <input
                            type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Create a strong password"
                            className="w-full p-4 border-2 border-transparent rounded-xl bg-bg-main text-text-main transition-all duration-300 focus:outline-none focus:border-primary-light focus:bg-bg-surface focus:shadow-[0_0_0_4px_rgba(79,70,229,0.1)] placeholder:text-slate-400"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-main">Confirm Password</label>
                        <input
                            type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder="Repeat password"
                            className="w-full p-4 border-2 border-transparent rounded-xl bg-bg-main text-text-main transition-all duration-300 focus:outline-none focus:border-primary-light focus:bg-bg-surface focus:shadow-[0_0_0_4px_rgba(79,70,229,0.1)] placeholder:text-slate-400"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 text-lg mt-4 font-bold rounded-xl transition-all duration-300 border-none bg-gradient-to-br from-primary to-primary-light text-white shadow-[0_4px_15px_rgba(79,70,229,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(79,70,229,0.5)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                        {loading ? "Creating Account..." : "Create Account"}
                    </button>
                </form>

                <p className="text-center mt-8 text-text-muted">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary font-semibold hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
