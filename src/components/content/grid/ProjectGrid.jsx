import ProjectArticle from "../project-article/ProjectArticle";
import {v4 as uuidv4} from 'uuid';
import {getProjects} from "../../../../lib/api";

export default async function ProjectGrid() {

    const projects = await getProjects();
    const projectArticles = projects?.map((project, index) => <ProjectArticle key={uuidv4()} index={index} project={project} /> );
    return (
        <section className="bg-white py-[70px] dark:bg-dark mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto px-4 sm:container">
                {projectArticles}
            </div>
        </section>
    );

}