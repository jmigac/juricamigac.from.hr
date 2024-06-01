import React from "react";
import "../../../styles/components/content/teaser/teaser.css"

class Teaser extends React.Component {

    constructor(props) {
        super(props);
        this.imageSource = props.imageSource;
        this.altText = props.altText;
        this.alignment = props.alignment;
        this.state = {
            image: null,
            imageIsReady: false
        }
    }

    componentDidMount() {
        const image = new Image();
        image.src = this.imageSource;
        this.setState({ image: image }, () => {
            this.setState({ imageIsReady: true });
        });
    }

    render() {
        const imageIsReady = this.state.imageIsReady;
        if (imageIsReady) {
            return (
                <React.Fragment>
                    <div className={'teaser-' + this.alignment}>
                        <img src={this.state.image?.src} 
                            alt={this.altText} 
                            loading="lazy"
                            className="teaser"
                            width={this.state.image?.width}
                            height={this.state.image?.height} /> 
                    </div>
                </React.Fragment>
            );
        }
    }
}

export default Teaser;