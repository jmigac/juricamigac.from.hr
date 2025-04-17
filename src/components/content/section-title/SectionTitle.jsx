export default function SectionTitle({text, highlight, anchor}) {
    const title = text || "";
    const highlightText = highlight || "";
    return (
        <section id={anchor} className='flex items-center justify-center'>
            <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{title} <span className="text-blue-600 dark:text-blue-500">{highlightText}</span></h2>
        </section>
    );
}