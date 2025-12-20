"use client";

import SectionTitle from "../components/ui/SectionTitle";
import MotionWrapper from "../components/ui/MotionWrapper";
import { educationData } from "../lib/data/Education";

export default function Education() {

    return (
        <MotionWrapper>
            <section className="my-16">
                <SectionTitle title="Education" />

                <div className="glass shadow-premium rounded-xl p-6 rounded-2xl p-6 md:p-10 border border-white/10 backdrop-blur-md">
                    <div className="flex flex-col gap-8">
                        {educationData.map((edu, i) => (
                            <div
                                key={i}
                                className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-6 pb-6 border-b border-white/10 last:border-b-0 last:pb-0"
                            >
                                {/* Left Column */}
                                <div className="text-sm md:text-[15px] text-white font-medium">
                                    {edu.level}
                                </div>

                                {/* Right Column */}
                                <div>
                                    <h3 className="text-[15px] md:text-lg font-semibold text-white tracking-wide">
                                        {edu.school}
                                    </h3>

                                    <p className="text-sm text-gray-300 leading-relaxed mt-2 max-w-3xl">
                                        {edu.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MotionWrapper>
    );
}
