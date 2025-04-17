import Badge from "../badge/Badge";
import {v4} from "uuid";


export default function ProjectArticle({ project, index }) {

    const technologiesMarkup = (project?.technologies.map((technology) => <Badge key={v4()} text={technology} />));
    const id = index || 0;
    return (
        <div className={`border-b border-stroke dark:border-dark-3 ${id!==0 && 'mt-6'}`}>
            <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                {project.title}
            </h2>
            <p className="mb-6 font-normal text-sm text-base text-gray-500 dark:text-gray-400">
                {project.description}
            </p>
            {technologiesMarkup}
        </div>
    );

}