import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../../../styles/components/content/grid/expertise-article/expertise-article.css"
import Markdown from "react-markdown";
import Skeleton from "react-loading-skeleton";

export default function ExpertiseArticle({ expertise }) {
    return (
        <Row className="expertise-article">
            <Col>
                <h4>{expertise.title || <Skeleton />}</h4>
                <Markdown>{expertise.description || <Skeleton />}</Markdown>
                <p className="bold flex technology-flex">
                    {expertise.technologies.map((technology) => <span key={technology} className="technology">{technology}</span>)}
                </p>
            </Col>
        </Row>
    );
}