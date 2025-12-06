"use client";

import Image from "next/image";
import MotionWrapper from "../components/ui/MotionWrapper";

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

                {/* Roles */}
                <p className="text-lg text-gray-300">
                    Mathematics • Software Engineering
                </p>

                {/* Short bio */}
                <p className="mt-4 max-w-xl mx-auto text-gray-400 text-sm">
                    Building seamless digital experiences and empowering students to love
                    mathematics through clear, structured explanations.
                </p>

                {/* Call to Action Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                    <a
                        href="#contact"
                        className="px-5 py-2 glass rounded-xl text-sm shadow-premium hover:bg-white/10 transition"
                        >
                        Contact Me
                    </a>

                    <a
                        href="/cv.pdf"
                        className="px-5 py-2 bg-blue-600/80 hover:bg-blue-600 rounded-xl text-sm shadow-premium transition"
                        >
                        Download Letter
                    </a>
                </div>
            </section>
        </MotionWrapper>
    );
}