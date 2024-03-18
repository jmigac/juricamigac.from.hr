import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../../../styles/components/content/grid/project-article/project-article.css"

function ProjectArticle({project}) {
    const technologies = project.technologies.join(", ");
    return (
        <Row className="project-article">
            <Col>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <p className="bold">{technologies}</p>
            </Col>
        </Row>
    );
}

export default ProjectArticle;