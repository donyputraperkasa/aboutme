"use client";

import React from "react";
import Image from "next/image";
import MotionWrapper from "../components/ui/MotionWrapper";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaTiktok, FaUser, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

export default function Hero() {
    const [open, setOpen] = React.useState(false);
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
                <p className="mt-4 text-md text-gray-300">
                    I am a Mathematics graduate with a strong passion for education, particularly as a mathematics educator.
                    I enjoy delivering learning materials in a clear and engaging way to help students build confidence
                    in understanding mathematical concepts. In addition, I have a strong interest in web development
                    (HTML, CSS, and JavaScript) as a tool to support technology-based learning. With a continuous learning
                    mindset and a commitment to self-improvement, I am eager to contribute as an inspiring and adaptive educator.
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
                <div className="mt-6 flex justify-center gap-4 relative">
                    <div className="relative group">
                        <button
                            onClick={() => setOpen(true)}
                            className="px-5 py-2 glass rounded-xl text-sm shadow-premium hover:bg-white/10 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition"
                        >
                            Contact Me
                        </button>
                    </div>

                    <a
                        href="/cv2025.pdf"
                        className="px-5 py-2 bg-blue-600/80 hover:bg-blue-600 rounded-xl text-sm shadow-premium hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition"
                    >
                        Download Letter
                    </a>
                </div>

                {/* Connect With Me Modal */}
                {open && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                    >
                        <div
                            className="bg-[#0b0b0b] rounded-2xl p-6 w-80 shadow-xl relative animate-fadeIn"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-3 right-3 text-gray-400 hover:text-white"
                            >
                                ✕
                            </button>

                            <h3 className="text-lg font-semibold text-white mb-4 text-center">
                                Connect With Me
                            </h3>

                            <div className="flex flex-col gap-3 text-sm text-gray-300">
                                <a
                                    href="https://www.instagram.com/donyputraperkasa/"
                                    target="_blank"
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
                                >
                                    <FaInstagram /> Instagram
                                </a>
                                <a
                                    href="https://wa.me/6282236343404"
                                    target="_blank"
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
                                >
                                    <FaWhatsapp /> WhatsApp
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/dony-putra-perkasa-49ba87233/"
                                    target="_blank"
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
                                >
                                    <FaLinkedin /> LinkedIn
                                </a>
                                <a
                                    href="https://www.tiktok.com/@donyputraperkasa"
                                    target="_blank"
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
                                >
                                    <FaTiktok /> TikTok
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </MotionWrapper>
    );
}