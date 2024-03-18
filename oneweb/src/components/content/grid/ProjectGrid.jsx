import Container from "react-bootstrap/esm/Container";
import ProjectArticle from "../project-article/ProjectArticle";
import { v4 as uuidv4 } from 'uuid';
import React from 'react'; 
import axios from 'axios'

/*function ProjectGrid() {
    const projectContent = require("../../../content/project-section/projects.json")
    const projects = projectContent.projects;
    return (
        <Container>
            {projects.map((project) => <ProjectArticle key={uuidv4()} project={project} /> )}
        </Container>      
    );
}

export default ProjectGrid;
*/

class ProjectGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
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
            projectArticleCollection(limit: 8) {
              items {
                title
                description
                technologies
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
            const projectArticles = response.data.data.projectArticleCollection.items;
            this.setState({ projects: projectArticles })
          })
          .catch((error) => {
            console.log(error);
          });
    }

    render() {
        const isReady = this.state.projects.length > 0;
        if (isReady) {
            console.log(this.state.projects);
            return (
                <Container>
                    {this.state.projects.map((project) => <ProjectArticle key={uuidv4()} project={project} /> )}
                </Container>
            )
        }
    }
}

export default ProjectGrid;