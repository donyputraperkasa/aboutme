"use client";

export default function GlassContainer({
    children,
    className = "",
    }: {
    children: React.ReactNode;
    className?: string;
    }) {
    return (
        <div
        className={`glass shadow-premium rounded-2xl p-8 border border-white/10 ${className}`}
        >
        {children}
        </div>
    );
}