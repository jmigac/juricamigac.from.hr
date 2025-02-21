import "../../../../styles/components/structure/header/title/title.css"
import Skeleton from "react-loading-skeleton";

export default function Title({ text }) {
    return (
        <div className="flex justify-content-md-end justify-content-lg-end justify-content-sm-end justify-content-xl-end justify-content-xxl-end justify-content-end">
            <h2 className="title">{text || <Skeleton />}</h2>
        </div>
    );
}