import "../../../../styles/components/structure/header/title/title.css"

function Title(props) {
    return (
        <div className="flex center">
            <h2 className="title">{props.text}</h2>
        </div>
    );
}

export default Title;