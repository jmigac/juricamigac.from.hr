import Markdown from "react-markdown";

function ExperinceArticle({title, from, until, description}) {
    return (
        <>
            <h3>{title}</h3>
            <p>{from} - {until}</p>
            <Markdown>{description}</Markdown>
        </>
    );
}

export default ExperinceArticle;