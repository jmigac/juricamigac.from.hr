import React from "react";
import "../../../styles/components/content/about-me/about-me.css"

class AboutMe extends React.Component {

    constructor(props) {
        super(props);
        this.title = props.data.title;
        this.description = props.data.description;
    }

    render() {
        return (
          <div className='about-me-container'>
              <h2 className='justify-content-start about-me-title'>{this.title}</h2>
              <p>{this.description}</p>
          </div>
        );
    }
}

export default AboutMe;