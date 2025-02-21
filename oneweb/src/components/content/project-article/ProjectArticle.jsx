import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../../../styles/components/content/grid/project-article/project-article.css"
import Markdown from "react-markdown";
import Skeleton from "react-loading-skeleton";

export default function ProjectArticle({ project }) {

    const technologiesMarkup = (project.technologies?.map((technology) =>
        <span key={technology}
              className="technology">{technology}</span>));
    return (
        <Row className="project-article">
        <Col>
                <h4>{project.title || <Skeleton />}</h4>
                <Markdown>{project.description || <Skeleton />}</Markdown>
                <p className="bold flex technology-flex">
                    {technologiesMarkup}
                </p>
            </Col>
        </Row>
    );

}