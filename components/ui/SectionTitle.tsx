export default function SectionTitle({ title }: { title: string }) {
    return (
        <h2 className="text-2xl font-semibold mb-4 text-gradient tracking-wide">
            {title}
        </h2>
    );
}