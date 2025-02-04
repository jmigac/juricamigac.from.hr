import React from "react";
import "../../../styles/components/content/teaser/teaser.css"
import Title from "../../structure/header/title/Title";

class Teaser extends React.Component {

    constructor(props) {
        super(props);
        this.imageSource = props.imageSource;
        this.altText = props.altText;
        this.alignment = props.alignment;
        this.title = props.title;
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
                <>
                    <div className='teaser-container'>
                        <div className='teaser-wrapper'>
                            <div className='teaser-item'>
                                <Title text={this.title} />
                                <img src={this.state.image?.src}
                                     alt={this.altText}
                                     loading="lazy"
                                     className="teaser-image"
                                     width={this.state.image?.width}
                                     height={this.state.image?.height}/>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }
}

export default Teaser;