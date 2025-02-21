import React, {useEffect, useState} from "react";
import "../../../styles/components/content/teaser/teaser.css"
import Title from "../../structure/header/title/Title";
import Skeleton from "react-loading-skeleton";

export default function Teaser({ imageSource, altText, alignment, title}) {

    const [imageReady, setImageReady] = useState(false);
    const [image, setImage] = useState(null);

    useEffect(() => {
        setImageReady(true);
    }, []);

    useEffect(() => {
        const image = new Image();
        image.src = imageSource;
        setImage(image);
        setImageReady(false);
    }, [imageSource]);

    const imageMarkup = (imageReady && <Skeleton height={500} />) || (<img src={image?.src}
                                            alt={altText}
                                            loading="lazy"
                                            className="teaser-image"
                                            width={image?.width}
                                            height={image?.height}/>)
    return (
        <div className='teaser-container'>
            <div className='teaser-wrapper'>
                <div className='teaser-item'>
                    <Title text={title}/>
                    {imageMarkup}
                </div>
            </div>
        </div>
    );

}