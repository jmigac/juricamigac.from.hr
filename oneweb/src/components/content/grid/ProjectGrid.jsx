import ProjectArticle from "../project-article/ProjectArticle";
import {v4 as uuidv4} from 'uuid';
import React from 'react';
import "../../../styles/components/content/grid/grid.css"

class ProjectGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    async componentDidMount() {
        this.setState({ projects: this.props.projects });
    }

    render() {
        const isReady = this.state.projects.length > 0;
        if (isReady) {
            const projects = this.state.projects;
            return (
                <div className="project-container">
                      {projects.map((project) => <ProjectArticle key={uuidv4()} project={project} /> )}
                </div>
            );
        }
    }
}

export default ProjectGrid;