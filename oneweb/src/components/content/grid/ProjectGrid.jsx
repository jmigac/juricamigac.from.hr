import ProjectArticle from "../project-article/ProjectArticle";
import {v4 as uuidv4} from 'uuid';
import React, {useEffect, useState} from 'react';
import "../../../styles/components/content/grid/grid.css"

export default function ProjectGrid({ projects }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, []);

    useEffect(() => {
        setData(projects);
        setLoading(false);
    }, [projects]);

    if (!loading && data) {
        const projectMarkup = projects.map((project) => <ProjectArticle key={uuidv4()} project={project} />);
        return (
            <div className="project-container">
                {projectMarkup}
            </div>
        );
    }
};