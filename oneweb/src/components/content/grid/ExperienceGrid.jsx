import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import ExperinceArticle from "../experience-article/ExperienceArticle";
import "../../../styles/components/content/grid/grid.css"

function getColumnWithExperienceArticle(experienceArticle) {
    let untilValue = experienceArticle.until === null;
    let formattedDate = "";
    if (untilValue) {
        const currentDate = new Date();
        let month = parseInt(currentDate.getMonth() + 1);
        month = month < 10 ? "0" + month : month;
        formattedDate = currentDate.getFullYear() + "-" + month;
        formattedDate = formattedDate.replaceAll("-", ".");
    }
    let formattedFrom = experienceArticle.from.split("T")[0].replaceAll("-", ".");
    const untilDate = untilValue ? formattedDate : experienceArticle.until.split("T")[0].replaceAll("-", ".");
    return (
        <ExperinceArticle
            title={experienceArticle.title}
            from={formattedFrom}
            until={untilDate}
            description={experienceArticle.description} />
    );
}

function getExperienceRow(experienceArticle) {
    return (
        <section key={uuidv4()}>
            {getColumnWithExperienceArticle(experienceArticle)}
        </section>
    );
}

export default function ExperienceGrid({ experiences }) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, []);

    useEffect(() => {
        setArticles(experiences);
        setLoading(false);
    }, [experiences]);

    if (articles && !loading) {
        const renderedArticles = articles.map((article) => getExperienceRow(article));
        return (
            <div className="center experience-grid-padding experience-grid">
                {renderedArticles}
            </div>
        )
    }

}