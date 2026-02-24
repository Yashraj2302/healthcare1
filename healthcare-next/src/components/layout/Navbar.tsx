import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300">
            <nav className="flex justify-between items-center py-4 px-5 md:px-[5%] max-w-[1400px] mx-auto">
                <Link
                    href="/"
                    className="text-2xl font-extrabold text-primary no-underline flex items-center gap-2 hover:scale-105 transition-transform duration-150"
                >
                    ⚕️ HealthCare
                </Link>

                <ul className="hidden md:flex gap-8 items-center list-none">
                    <li>
                        <Link
                            href="/"
                            className="text-muted font-medium text-[1.05rem] relative py-2 transition-colors duration-150 hover:text-primary after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 after:rounded-full hover:after:w-full"
                            style={{ color: "var(--color-primary)", width: "100%" }}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/doctors"
                            className="text-muted font-medium text-[1.05rem] relative py-2 transition-colors duration-150 hover:text-primary after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 after:rounded-full hover:after:w-full"
                        >
                            Doctors
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/hospitals"
                            className="text-muted font-medium text-[1.05rem] relative py-2 transition-colors duration-150 hover:text-primary after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 after:rounded-full hover:after:w-full"
                        >
                            Hospitals
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/blood-bank"
                            className="text-muted font-medium text-[1.05rem] relative py-2 transition-colors duration-150 hover:text-primary after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 after:rounded-full hover:after:w-full"
                        >
                            Blood Bank
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/emergency"
                            className="text-danger font-bold text-[1.05rem] relative py-2 transition-colors duration-150 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-danger after:transition-all after:duration-300 after:rounded-full hover:after:w-full"
                        >
                            Emergency
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/login"
                            className="inline-flex items-center justify-center px-4 py-[0.4rem] text-base font-semibold rounded-full transition-all duration-300 cursor-pointer border-2 bg-transparent text-primary border-primary hover:bg-primary hover:text-white hover:shadow-[0_4px_15px_rgba(79,70,229,0.3)]"
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/signup"
                            className="inline-flex items-center justify-center px-4 py-[0.4rem] text-base font-semibold rounded-full transition-all duration-300 cursor-pointer border-none bg-gradient-to-br from-primary to-primary-light text-white shadow-[0_4px_15px_rgba(79,70,229,0.4)] hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(79,70,229,0.5)]"
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>

                {/* Mobile menu button could go here */}
            </nav>
        </header>
    );
}
