import {getExperiences} from "../../../../lib/api";
import ExperienceArticle from "../experience-article/ExperienceArticle";
import {v4} from "uuid";

export default async function ExperienceGrid() {
    const experiences = await getExperiences();
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {experiences?.map((experience) => <ExperienceArticle key={v4()} experience={experience} /> )}
            </ol>
        </section>
    )
}