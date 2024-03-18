import Container from "react-bootstrap/esm/Container";
import ProjectArticle from "../project-article/ProjectArticle";
import { v4 as uuidv4 } from 'uuid';

function ProjectGrid() {
    const projectContent = require("../../../content/project-section/projects.json")
    const projects = projectContent.projects;
    return (
        <Container>
            {projects.map((project) => <ProjectArticle key={uuidv4()} project={project} /> )}
        </Container>      
    );
}

export default ProjectGrid;