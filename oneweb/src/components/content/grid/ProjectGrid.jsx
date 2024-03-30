import Container from "react-bootstrap/esm/Container";
import ProjectArticle from "../project-article/ProjectArticle";
import { v4 as uuidv4 } from 'uuid';
import React from 'react'; 
import Contentful from "../../../services/Contentful";
import "../../../styles/components/content/grid/grid.css"

class ProjectGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    async componentDidMount() {
        const projectArticles = await Contentful.getProjectArticles();
        this.setState({ projects: projectArticles });
    }

    render() {
        const isReady = this.state.projects.length > 0;
        if (isReady) {
            const projects = this.state.projects;
            return (
                <Container className="project-container">
                      {projects.map((project) => <ProjectArticle key={uuidv4()} project={project} /> )}
                </Container>
            );
        }
    }
}

export default ProjectGrid;