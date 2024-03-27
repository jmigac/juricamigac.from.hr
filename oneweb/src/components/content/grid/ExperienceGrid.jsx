import Container from "react-bootstrap/esm/Container";
import React from 'react'; 
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import ExperinceArticle from "../experience-article/ExperienceArticle";
import { v4 as uuidv4 } from 'uuid';
import "../../../styles/components/content/grid/grid.css"
import Contentful from "../../../services/Contentful";


class ExperienceGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    async componentDidMount() {
        const experienceArticles = await Contentful.getExperienceArticles();
        this.setState({ articles: experienceArticles });
    }

    getColumnWithExperienceArticle(experienceArticle) {
        let untilValue = experienceArticle.until === null;
        let formattedDate = "";
        if (untilValue) {
            const currentDate = new Date();
            let month = parseInt(currentDate.getMonth() + 1);
            month = month < 10 ? "0" + month : month; 
            formattedDate = currentDate.getFullYear() + "-" + month;
            formattedDate = formattedDate.replaceAll("-", ".");
        }
        let formattedFrom = experienceArticle.from.split("T")[0].replaceAll("-", ".");
        const untilDate = untilValue ? formattedDate : experienceArticle.until.split("T")[0].replaceAll("-", ".");
        return (
                <ExperinceArticle 
                    title={experienceArticle.title}
                    from={formattedFrom}
                    until={untilDate}
                    description={experienceArticle.description} />
        );
    }

    getExperienceRow(experienceArticle) {
        return (
            <Row key={uuidv4()}>
                <Col xs={12} md={12}>
                    {this.getColumnWithExperienceArticle(experienceArticle)}
                </Col>
            </ Row>
        );
    }

    render() {
        const isReady = this.state.articles.length > 0;
        if (isReady) {
            return (
                <Container className="center experience-grid-padding">
                    {this.state.articles.map((experienceArticle) => this.getExperienceRow(experienceArticle))}
                </Container>
            )
        }
    }
 }

export default ExperienceGrid;
