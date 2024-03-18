
function ExperinceArticle({title, from, until, description}) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{from} - {until}</p>
        </div>
    );
}

export default ExperinceArticle;