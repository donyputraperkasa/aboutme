"use client";

import SectionTitle from "../components/ui/SectionTitle";
import MotionWrapper from "../components/ui/MotionWrapper";
import { experienceData } from "../lib/data/Experience";

export default function Experience() {
    return (
        <MotionWrapper>
            <section className="my-16">
                <SectionTitle title="Experience" />

                <div className="relative border-l border-white/20 ml-4">
                    {experienceData.map((item, i) => (
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