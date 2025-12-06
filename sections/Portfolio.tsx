"use client";

import Image from "next/image";
import SectionTitle from "../components/ui/SectionTitle";
import MotionWrapper from "../components/ui/MotionWrapper";

export default function Portfolio() {
    const projects = [
        {
        title: "platform Bimbel Matematika",
        image: "/belajarmatematika.png",
        desc: "website bimbel matematika online",
        link: "https://belajarmatematika-two.vercel.app/",
        },
        {
        title: "media pembelajaran matematika",
        image: "/flipcard.png",
        desc: "media pembelajaran matematika flip card game",
        link: "https://flip-card-fe.vercel.app/",
        },
    ];

    return (
        <MotionWrapper>
        <section className="my-16">
        <SectionTitle title="Portfolio" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
            <a
                key={i}
                href={p.link}
                target="_blank"
                className="block glass shadow-premium rounded-xl p-3 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
                <div className="relative w-full h-40 rounded-lg overflow-hidden mb-3">
                <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover rounded-lg hover:opacity-90 transition"
                />
                </div>

                <h3 className="font-semibold text-lg text-white">{p.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{p.desc}</p>
            </a>
            ))}
        </div>
        </section>
        </MotionWrapper>
    );
}