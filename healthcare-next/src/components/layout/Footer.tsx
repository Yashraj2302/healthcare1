import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-text-main text-bg-main pt-20 px-5 pb-8 mt-20 relative">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-12 mb-16">
                <div className="flex flex-col">
                    <h4 className="text-white text-2xl mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-1/2 after:h-[2px] after:bg-primary w-fit">
                        HealthCare Portal
                    </h4>
                    <p className="text-slate-400 text-[1.05rem]">
                        Providing exceptional medical services with compassion and advanced technology to ensure the best patient outcomes.
                    </p>
                </div>

                <div className="flex flex-col">
                    <h4 className="text-white text-2xl mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-1/2 after:h-[2px] after:bg-primary w-fit">
                        Quick Links
                    </h4>
                    <ul className="list-none flex flex-col gap-3">
                        <li>
                            <Link href="/" className="text-slate-400 no-underline transition-colors duration-150 inline-flex items-center hover:text-primary-light hover:translate-x-1">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/doctors" className="text-slate-400 no-underline transition-colors duration-150 inline-flex items-center hover:text-primary-light hover:translate-x-1">
                                Find a Doctor
                            </Link>
                        </li>
                        <li>
                            <Link href="/blood-bank" className="text-slate-400 no-underline transition-colors duration-150 inline-flex items-center hover:text-primary-light hover:translate-x-1">
                                Blood Bank
                            </Link>
                        </li>
                        <li>
                            <Link href="/login" className="text-slate-400 no-underline transition-colors duration-150 inline-flex items-center hover:text-primary-light hover:translate-x-1">
                                Patient Login
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h4 className="text-white text-2xl mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-1/2 after:h-[2px] after:bg-primary w-fit">
                        Contact Us
                    </h4>
                    <div className="flex flex-col gap-2 text-slate-400 text-[1.05rem]">
                        <p>Emergency: 911</p>
                        <p>Main: 1-800-HEALTH</p>
                        <p>Email: info@healthcare.gov</p>
                    </div>
                </div>
            </div>

            <div className="text-center pt-8 border-t border-white/10 text-slate-500">
                <p>&copy; {new Date().getFullYear()} HealthCare Portal. All rights reserved.</p>
            </div>
        </footer>
    );
}
