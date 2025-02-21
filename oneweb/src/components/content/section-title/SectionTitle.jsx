import "../../../styles/components/content/section-title/section-title.css"

export default function SectionTitle({ title, anchor }) {
    return (
        <h4 id={anchor} className="section-title flex center">{title}</h4>
    );
}