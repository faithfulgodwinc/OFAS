"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Resources", href: "/resources" },
    { name: "News", href: "/blog" },
    { name: "Campus Bases", href: "/campus-bases" },
    { name: "Events", href: "/events" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800 sticky top-0 z-[100] transition-all duration-300">
            <Container>
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="bg-white p-1 rounded-full shadow-sm shrink-0 flex items-center justify-center">
                            <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden flex items-center bg-black">
                                <Image
                                    src="/logo.jpg"
                                    alt="OFAS Logo"
                                    fill
                                    className="object-cover scale-[1.05]"
                                    priority
                                />
                            </div>
                        </div>
                        <span className="font-heading font-bold text-2xl tracking-tight text-brand hidden md:block">
                            OFAS
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex space-x-8">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className="text-gray-600 dark:text-gray-300 hover:text-brand dark:hover:text-white px-2 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5">
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Show partial nav for smaller desktop screens if needed, otherwise rely on xl-flex */}
                        <div className="hidden md:flex xl:hidden space-x-4">
                            <Link href="/about" className="text-gray-500 text-sm font-medium">About</Link>
                            <Link href="/volunteer" className="text-gray-500 text-sm font-medium">Volunteer</Link>
                            <Link href="/blog" className="text-gray-500 text-sm font-medium">News</Link>
                        </div>
                        <Link href="/donate">
                            <Button className="rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all h-10 px-6">Donate</Button>
                        </Link>
                        {/* Mobile/Tablet Menu Button (visible on md/lg, hidden on xl) */}
                        <div className="flex items-center xl:hidden">
                            <button
                                type="button"
                                className="text-gray-500 hover:text-gray-600 focus:outline-none ml-2"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <span className="sr-only">Open main menu</span>
                                {mobileMenuOpen ? (
                                    <X className="h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button (visible on sm only) */}
                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            className="text-gray-500 hover:text-gray-600 focus:outline-none"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-800 absolute w-full left-0 shadow-2xl xl:hidden">
                    <Container className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand hover:bg-gray-50"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4 px-3">
                            <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
                                <Button className="w-full rounded-full font-bold">Donate</Button>
                            </Link>
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
}
