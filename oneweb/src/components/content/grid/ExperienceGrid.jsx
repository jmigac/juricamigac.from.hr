import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import ExperinceArticle from "../experience-article/ExperienceArticle";
import { v4 as uuidv4 } from 'uuid';
import "../../../styles/components/content/grid/grid.css"

function getColumnWithExperienceArticle(experienceArticle) {
    let untilValue = experienceArticle.until === "";
    let formattedDate = "";
    if (untilValue) {
        const currentDate = new Date();
        let month = parseInt(currentDate.getMonth() + 1);
        month = month < 10 ? "0" + month : month; 
        formattedDate = month + "." + currentDate.getFullYear();
    }
    const untilDate = untilValue ? formattedDate : experienceArticle.until;
    return (
            <ExperinceArticle 
                title={experienceArticle.title}
                from={experienceArticle.from}
                until={untilDate}
                description={experienceArticle.description} />
    );
}

function getExperienceRow(experienceArticle) {
    return (
        <Row key={uuidv4()}>
            <Col xs={12} md={12}>
                {getColumnWithExperienceArticle(experienceArticle)}
            </Col>
        </ Row>
    );
}

function ExperienceGrid() {
    const data = require('../../../content/experience-section/experience.json')
    const experienceArticles = data.experiences;
    return (
        <Container className="center experience-grid-padding">
            {experienceArticles.map((experienceArticle) => getExperienceRow(experienceArticle))}
        </Container>
    );
}

export default ExperienceGrid;