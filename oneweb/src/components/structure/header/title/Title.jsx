import "../../../../styles/components/structure/header/title/title.css"

function Title(props) {
    return (
        <div className="flex justify-content-md-end justify-content-lg-end justify-content-sm-end justify-content-xl-end justify-content-xxl-end justify-content-end">
            <h2 className="title">{props.text}</h2>
        </div>
    );
}

export default Title;