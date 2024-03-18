import Container from "react-bootstrap/esm/Container";
import React from 'react'; 
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import ExperinceArticle from "../experience-article/ExperienceArticle";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import "../../../styles/components/content/grid/grid.css"


class ExperienceGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        this.fetchExperiences();
    }

    fetchExperiences() {
        const spaceId = process.env.REACT_APP_SPACE_ID;
        const environment = process.env.REACT_APP_ENVIRONMENT;
        const token = process.env.REACT_APP_TOKEN;
        const api = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`;
        let data = JSON.stringify({
            query: `{
            experienceArticleCollection(limit: 8) {
              items {
                title
                description
                from
                until
              }
            }
          }`,
            variables: {}
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: api,
            headers: { 
              'Content-Type': 'application/json', 
              'Authorization': `Bearer ${token}`
            },
            data : data
          };
          
          axios.request(config)
          .then((response) => {
            const experienceArticles = response.data.data.experienceArticleCollection.items;
            this.setState({ articles: experienceArticles })
          })
          .catch((error) => {
            console.log(error);
          });
    }

    getColumnWithExperienceArticle(experienceArticle) {
        let untilValue = experienceArticle.until === null;
        let formattedDate = "";
        if (untilValue) {
            const currentDate = new Date();
            let month = parseInt(currentDate.getMonth() + 1);
            month = month < 10 ? "0" + month : month; 
            formattedDate = currentDate.getFullYear() + "-" + month;
        }
        let formattedFrom = experienceArticle.from.split("T")[0];
        const untilDate = untilValue ? formattedDate : experienceArticle.until.split("T")[0];
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
