"use client";

import Image from "next/image";
import MotionWrapper from "../components/ui/MotionWrapper";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaTiktok, FaUser, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

export default function Hero() {
    return (
        <MotionWrapper>
            <section className="text-center m-16">
                {/* Profile Image */}
                <div className="relative mx-auto w-40 h-40 mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 blur-xl opacity-40" />
                        <Image
                            src="/dony-1.png"
                            alt="Profile"
                            width={160}
                            height={160}
                            className="bg-white rounded-full object-cover relative z-10 border border-white/20 shadow-lg"
                        />
                </div>

                {/* Name */}
                <h1 className="text-4xl font-bold text-gradient mb-2">
                    dony putra perkasa
                </h1>

                {/* Short Description */}
                <p className="text-md text-gray-300">
                    Educator & Software Engineer dedicated to simplifying complex ideas through clean explanations and modern web technology.
                </p>

                {/* Short bio — Two Column Elegant */}
                <div className="bg-white/10 p-6 rounded-2xl mt-6 max-w-sm mx-auto text-gray-300 text-sm space-y-3 text-left">
                    <div className="flex items-center gap-2">
                        <FaUser className="w-4 h-4 text-blue-400" />
                        <p>Mathematics Educator & Software Engineer</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="w-4 h-4 text-blue-400" />
                        <p>Bantul, Yogyakarta</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaHeart className="w-4 h-4 text-blue-400" />
                        <p>Mathematics • Software Engineering</p>
                    </div>
                </div>

                {/* Call to Action Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                    <a
                        href="#contact"
                        className="px-5 py-2 glass rounded-xl text-sm shadow-premium hover:bg-white/10 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition"
                        >
                        Contact Me
                    </a>

                    <a
                        href="/cv.pdf"
                        className="px-5 py-2 bg-blue-600/80 hover:bg-blue-600 rounded-xl text-sm shadow-premium hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition"
                        >
                        Download Letter
                    </a>
                </div>

                {/* Social Icons */}
                <div className="mt-4 flex justify-center gap-5">
                    <a href="https://instagram.com/" target="_blank" className="text-gray-300 hover:text-white transition relative group">
                        <FaInstagram className="w-5 h-5 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] transition" />
                        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-white bg-black/60 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                            Instagram
                        </span>
                    </a>
                    <a href="https://wa.me/628xxxxxxxxx" target="_blank" className="text-gray-300 hover:text-white transition relative group">
                        <FaWhatsapp className="w-5 h-5 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] transition" />
                        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-white bg-black/60 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                            WhatsApp
                        </span>
                    </a>
                    <a href="https://linkedin.com/" target="_blank" className="text-gray-300 hover:text-white transition relative group">
                        <FaLinkedin className="w-5 h-5 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] transition" />
                        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-white bg-black/60 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                            LinkedIn
                        </span>
                    </a>
                    <a href="https://tiktok.com/" target="_blank" className="text-gray-300 hover:text-white transition relative group">
                        <FaTiktok className="w-5 h-5 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] transition" />
                        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-white bg-black/60 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                            Tiktok
                        </span>
                    </a>
                </div>
            </section>
        </MotionWrapper>
    );
}