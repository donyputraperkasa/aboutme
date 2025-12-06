"use client";

import SectionTitle from "../components/ui/SectionTitle";
import MotionWrapper from "../components/ui/MotionWrapper";
import { educationData } from "../lib/data/Education";

export default function Education() {

    return (
        <MotionWrapper>
        <section className="my-16">
            <SectionTitle title="Education" />

            <div className="glass shadow-premium rounded-xl p-6 border border-white/10">
            {educationData.map((edu, i) => (
                <div key={i}>
                <h3 className="text-xl font-semibold text-white">{edu.school}</h3>
                <p className="text-blue-300 text-sm">{edu.level}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{edu.desc}</p>
                </div>
            ))}
            </div>
        </section>
        </MotionWrapper>
    );
}
