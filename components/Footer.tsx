export default function Footer() {
    return (
        <footer className="mt-20 py-8 text-center text-gray-400 text-sm border-t border-white/10">
        <p>
            © {new Date().getFullYear()} Dony Putra Perkasa — Software Engineer & Math Enthusiast
        </p>
        <p className="mt-2 opacity-60">
            Built with Next.js & TailwindCSS
        </p>
        </footer>
    );
}