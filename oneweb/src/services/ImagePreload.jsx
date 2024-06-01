import preload from "react-dom"

const ImagePreload = {

    preloadImage(imageUrl) {
        preload(imageUrl, {
            as: "image"
        });
    }

}

export default ImagePreload;