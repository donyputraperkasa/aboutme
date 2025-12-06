"use client";

import SectionTitle from "../components/ui/SectionTitle";
import MotionWrapper from "../components/ui/MotionWrapper";

export default function Experience() {
    const data = [
        {
        title: "Software Engineer",
        company: "Freelance",
        year: "2023 - Now",
        desc: "Membangun aplikasi dan API modern menggunakan Next.js, NestJS, Prisma, dan MySQL.",
        },
        {
        title: "Math Tutor",
        company: "Private Teaching",
        year: "2021 - Now",
        desc: "Mengajar matematika menggunakan pendekatan visual, structured explanation, dan metode pemahaman konsep.",
        },
        {
        title: "Content Creator",
        company: "Math Education",
        year: "2022 - Now",
        desc: "Membuat konten edukasi matematika interaktif untuk siswa SMP & SMA.",
        },
    ];

    return (
        <MotionWrapper>
            <section className="my-16">
                <SectionTitle title="Experience" />

                <div className="relative border-l border-white/20 ml-4">
                    {data.map((item, i) => (
                    <div key={i} className="ml-6 mb-10">
                        {/* Dot */}
                        <div className="absolute -left-[9px] mt-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg" />

                        {/* Card */}
                        <div className="glass shadow-premium rounded-xl p-5">
                        <h3 className="font-semibold text-lg text-white">
                            {item.title}
                        </h3>
                        <p className="text-sm text-blue-300">{item.company}</p>
                        <p className="text-xs text-gray-400 mb-3">{item.year}</p>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </MotionWrapper>
    );
}