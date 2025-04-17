import {getExpertises} from "../../../../lib/api";
import ProjectArticle from "../project-article/ProjectArticle";
import {v4 as uuidv4} from "uuid";


export default async function ExpertiseGrid() {

    const expertises = await getExpertises();
    const expertiseArticles = expertises?.map((project, index) => <ProjectArticle key={uuidv4()} index={index} project={project} /> );
    return (
        <section className="bg-white py-[70px] dark:bg-dark mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto px-4 sm:container">
                {expertiseArticles}
            </div>
        </section>
    );


}