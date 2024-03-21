import Markdown from "react-markdown";

function ExperinceArticle({title, from, until, description}) {
    return (
        <div>
            <h3>{title}</h3>
            <Markdown>{description}</Markdown>
            <p>{from} - {until}</p>
        </div>
    );
}

export default ExperinceArticle;