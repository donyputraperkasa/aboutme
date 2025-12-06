"use client";

export default function Card({
    children,
    className = "",
    }: {
    children: React.ReactNode;
    className?: string;
    }) {
    return (
        <div
        className={`glass shadow-premium rounded-xl p-6 ${className}`}
        >
        {children}
        </div>
    );
}