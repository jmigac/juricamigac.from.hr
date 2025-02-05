import React from 'react';
import ExperinceArticle from "../experience-article/ExperienceArticle";
import "../../../styles/components/content/grid/grid.css"

class ExperienceGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    async componentDidMount() {
        this.setState({ articles: this.props.experiences });
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
                <>
                    {this.getColumnWithExperienceArticle(experienceArticle)}
                </>
        );
    }

    render() {
        const isReady = this.state.articles.length > 0;
        if (isReady) {
            return (
                <div className="center experience-grid-padding experience-grid">
                    {this.state.articles.map((experienceArticle) => this.getExperienceRow(experienceArticle))}
                </div>
            )
        }
    }
 }

export default ExperienceGrid;
