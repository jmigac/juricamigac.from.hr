import Markdown from "react-markdown";

export default function ExperienceArticle({title, from, until, description}) {
    return (
        <>
            <h3>{title}</h3>
            <p>{from} - {until}</p>
            <Markdown>{description}</Markdown>
        </>
    );
}