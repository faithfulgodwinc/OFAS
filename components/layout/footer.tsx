"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/5 text-white">
            <Container className="py-16 md:py-24">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="bg-white p-1 rounded-full shadow-sm shrink-0 flex items-center justify-center">
                                <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden flex items-center bg-black">
                                    <Image
                                        src="/logo.jpg"
                                        alt="OFAS Logo"
                                        fill
                                        className="object-cover scale-[1.05]"
                                    />
                                </div>
                            </div>
                            <span className="font-heading font-bold text-2xl tracking-tight text-white">
                                OFAS
                            </span>
                        </Link>
                        <p className="mt-6 text-gray-400 text-base leading-relaxed pr-4">
                            One Family Asthma Support Group. Dedicating to improving the lives of those affected by asthma through education, advocacy, and community support.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">
                                    Quick Links
                                </h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/about" className="text-base text-gray-300 hover:text-white">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/programs" className="text-base text-gray-300 hover:text-white">
                                            Programs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/events" className="text-base text-gray-300 hover:text-white">
                                            Events
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-base text-gray-400 hover:text-white transition-colors">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">
                                    Legal
                                </h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/legal/privacy" className="text-base text-gray-300 hover:text-white">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/legal/terms" className="text-base text-gray-300 hover:text-white">
                                            Terms of Use
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div className="mt-12 xl:mt-0">
                                <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">
                                    Stay Updated
                                </h3>
                                <p className="text-base text-gray-400 leading-relaxed">
                                    Subscribe to our newsletter for the latest updates.
                                </p>
                                <form className="mt-6 sm:flex sm:max-w-md gap-3" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="email"
                                        required
                                        className="appearance-none min-w-0 w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                                        placeholder="Enter your email"
                                    />
                                    <div className="mt-3 sm:mt-0 sm:flex-shrink-0">
                                        <Button type="submit" className="w-full h-full rounded-xl shadow-lg">
                                            Subscribe
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-base text-gray-500 text-center md:text-left">
                        &copy; {new Date().getFullYear()} One Family Asthma Support Group. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
