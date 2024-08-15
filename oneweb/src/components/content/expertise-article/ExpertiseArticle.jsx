import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../../../styles/components/content/grid/expertise-article/expertise-article.css"
import Markdown from "react-markdown";

function ExpertiseArticle({expertise}) {
    return (
        <Row className="expertise-article">
            <Col>
                <h4>{expertise.title}</h4>
                <Markdown>{expertise.description}</Markdown>
                <p className="bold flex technology-flex">
                    {expertise.technologies.map((technology) => <span key={technology} className="technology">{technology}</span>)}
                </p>
            </Col>
        </Row>
    );
}

export default ExpertiseArticle;