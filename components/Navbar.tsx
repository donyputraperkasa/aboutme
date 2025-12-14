"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl glass shadow-premium backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 z-50">
            <div className="flex justify-between items-center">
                
                {/* Brand */}
                <Link href="/" className="text-gradient font-semibold text-lg">
                about me
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 text-sm text-gray-200">
                    <Link href="#skills" className="hover:text-white transition">Skills</Link>
                    <Link href="#experience" className="hover:text-white transition">Experience</Link>
                    <Link href="#portfolio" className="hover:text-white transition">Portfolio</Link>
                    <Link href="#contact" className="hover:text-white transition">Contact</Link>
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-gray-200 hover:text-white transition"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✕" : "☰"}
                </button>

            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden mt-3 flex flex-col gap-3 text-sm text-gray-200">
                    <Link href="#skills" className="hover:text-white transition" onClick={() => setOpen(false)}>Skills</Link>
                    <Link href="#experience" className="hover:text-white transition" onClick={() => setOpen(false)}>Experience</Link>
                    <Link href="#portfolio" className="hover:text-white transition" onClick={() => setOpen(false)}>Portfolio</Link>
                    <Link href="#contact" className="hover:text-white transition" onClick={() => setOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}