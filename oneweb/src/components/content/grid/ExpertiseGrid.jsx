import Container from "react-bootstrap/esm/Container";
import ExpertiseArticle from "../expertise-article/ExpertiseArticle";
import { v4 as uuidv4 } from 'uuid';
import React from 'react'; 
import "../../../styles/components/content/grid/grid.css"

class ExpertiseGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expertises: []
        }
    }

    async componentDidMount() {
        this.setState({ expertises: this.props.expertises });
    }

    render() {
        const isReady = this.state.expertises.length > 0;
        if (isReady) {
            const expertises = this.state.expertises;
            return (
                <Container className="project-container">
                      {expertises.map((expertise) => <ExpertiseArticle key={uuidv4()} expertise={expertise} /> )}
                </Container>
            );
        }
    }
}

export default ExpertiseGrid;