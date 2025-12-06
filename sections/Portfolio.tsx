"use client";

import Image from "next/image";
import SectionTitle from "../components/ui/SectionTitle";
import MotionWrapper from "../components/ui/MotionWrapper";
import { projectData } from "../lib/data/Project";

export default function Portfolio() {
    return (
        <MotionWrapper>
            <section className="my-16">
                <SectionTitle title="Portfolio" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectData.map((p, i) => (
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