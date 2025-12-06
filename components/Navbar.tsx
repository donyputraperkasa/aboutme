"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl glass shadow-premium backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 z-50">
        <div className="flex justify-between items-center">
            
            {/* Brand */}
            <Link href="/" className="text-gradient font-semibold text-lg">
            about me
            </Link>

            {/* Menu */}
            <div className="flex gap-6 text-sm text-gray-200">
            <Link href="#skills" className="hover:text-white transition">Skills</Link>
            <Link href="#experience" className="hover:text-white transition">Experience</Link>
            <Link href="#portfolio" className="hover:text-white transition">Portfolio</Link>
            <Link href="#contact" className="hover:text-white transition">Contact</Link>
            </div>

        </div>
        </nav>
    );
}