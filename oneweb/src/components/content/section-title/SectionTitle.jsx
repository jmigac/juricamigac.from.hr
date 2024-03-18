import "../../../styles/components/content/section-title/section-title.css"

function SectionTitle({title, anchor}) {
    return (
        <h4 id={anchor} className="section-title flex center">{title}</h4>
    );
}

export default SectionTitle;