import "../../../styles/components/content/teaser/teaser.css"

function Teaser({imageSource, altText, alignment}) {
    return (
        <div className={'teaser-' + alignment}>
            <img src={imageSource} 
                 alt={altText} 
                 loading="eager"
                 className="teaser" /> 
        </div>
    );
}

export default Teaser;