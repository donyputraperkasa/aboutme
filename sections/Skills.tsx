"use client";

import { Code, Sigma } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import MotionWrapper from "../components/ui/MotionWrapper";

export default function Skills() {
    const softwareSkills = [
        "Next.js",
        "NestJS",
        "Prisma ORM",
        "MySQL / PostgreSQL",
        "TypeScript",
        "Tailwind CSS",
        "REST API",
        "Clean Architecture",
    ];

    const mathSkills = [
        "Algebra",
        "Geometry",
        "Trigonometry",
        "Calculus",
        "Mathematical Reasoning",
        "Problem Solving",
    ];

    return (
        <MotionWrapper>
        <section className="my-16">
        <SectionTitle title="Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Software Engineering */}
            <div className="glass shadow-premium rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Software Engineering</h3>
            </div>

            <ul className="space-y-2">
                {softwareSkills.map((skill, i) => (
                <li
                    key={i}
                    className="text-gray-300 text-sm border-b border-white/10 pb-2"
                >
                    {skill}
                </li>
                ))}
            </ul>
            </div>

            {/* Mathematics */}
            <div className="glass shadow-premium rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
                <Sigma className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Mathematics</h3>
            </div>

            <ul className="space-y-2">
                {mathSkills.map((skill, i) => (
                <li
                    key={i}
                    className="text-gray-300 text-sm border-b border-white/10 pb-2"
                >
                    {skill}
                </li>
                ))}
            </ul>
            </div>

        </div>
        </section>
        </MotionWrapper>
    );
}