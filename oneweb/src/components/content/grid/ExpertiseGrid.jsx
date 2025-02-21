import ExpertiseArticle from "../expertise-article/ExpertiseArticle";
import {v4 as uuidv4} from 'uuid';
import React, {useEffect, useState} from 'react';
import "../../../styles/components/content/grid/grid.css"

export default function ExpertiseGrid({ expertises }) {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
    }, []);

    useEffect(() => {
        setData(expertises);
        setLoading(false);
    }, [expertises]);

    if (!loading && data) {
        const expertiseArticles = expertises.map((expertise) => <ExpertiseArticle key={uuidv4()} expertise={expertise} />);
        return (
            <div className="project-container">
                {expertiseArticles}
            </div>
        );
    }

}