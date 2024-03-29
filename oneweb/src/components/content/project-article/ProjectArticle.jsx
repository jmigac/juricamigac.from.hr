import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../../../styles/components/content/grid/project-article/project-article.css"
import Markdown from "react-markdown";

function ProjectArticle({project}) {
    return (
        <Row className="project-article">
            <Col>
                <h4>{project.title}</h4>
                <Markdown>{project.description}</Markdown>
                <p className="bold flex technology-flex">
                    {project.technologies.map((technology) => <span key={technology} className="technology">{technology}</span>)}
                </p>
            </Col>
        </Row>
    );
}

export default ProjectArticle;