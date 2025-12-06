"use client";

import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";

export default function Contact() {
    return (
        <section id="contact" className="my-16">
            <SectionTitle title="Contact Me" />

            <div className="glass shadow-premium rounded-2xl p-8 text-center border border-white/10">
                
                <p className="text-gray-300 mb-6 max-w-md mx-auto">
                Feel free to reach out for collaborations, teaching opportunities, or project inquiries.
                </p>

                {/* Contact Items */}
                <div className="grid sm:grid-cols-2 gap-6 text-left max-w-xl mx-auto">

                {/* Email */}
                <a
                    href="mailto:putraperkasa27@gmail.com"
                    className="flex items-center gap-3 hover:opacity-80 transition"
                >
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-200 text-sm">putraperkasa27@gmail.com</span>
                </a>

                {/* Phone */}
                <a
                    href="https://wa.me/628xxxxxxx"
                    className="flex items-center gap-3 hover:opacity-80 transition"
                >
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-200 text-sm">+62 8xx-xxxx-xxxx</span>
                </a>

                {/* Instagram */}
                <a
                    href="https://instagram.com/"
                    target="_blank"
                    className="flex items-center gap-3 hover:opacity-80 transition"
                >
                    <Instagram className="w-5 h-5 text-pink-400" />
                    <span className="text-gray-200 text-sm">@instagramkamu</span>
                </a>

                {/* Linkedin */}
                <a
                    href="https://linkedin.com/"
                    target="_blank"
                    className="flex items-center gap-3 hover:opacity-80 transition"
                >
                    <Linkedin className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-200 text-sm">LinkedIn Profile</span>
                </a>
                </div>
            </div>
        </section>
    );
}