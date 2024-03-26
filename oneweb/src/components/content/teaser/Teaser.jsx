import React from "react";
import "../../../styles/components/content/teaser/teaser.css"

class Teaser extends React.Component {

    constructor(props) {
        super(props);
        this.imageSource = props.imageSource;
        this.altText = props.altText;
        this.alignment = props.alignment;
        this.state = {
            image: null
        }
    }

    componentDidMount() {
        const image = new Image();
        image.src = this.imageSource;
        this.setState({ image: image });
    }

    areWidthAndHeightPresent() {
        return this.state.image?.width !== 0 && this.state.image?.height !== 0
    }

    render() {
        if (this.state.image != null && this.areWidthAndHeightPresent()) {
            return (
                <div className={'teaser-' + this.alignment}>
                    <img src={this.imageSource} 
                        alt={this.altText} 
                        loading="lazy"
                        className="teaser"
                        width={this.state.image?.width}
                        height={this.state.image?.height} /> 
                </div>
            );
        }
    }
}

export default Teaser;