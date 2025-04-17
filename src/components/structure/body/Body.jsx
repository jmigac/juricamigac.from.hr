import Hero from "../../content/hero/Hero";
import SectionTitle from "../../content/section-title/SectionTitle";
import ExperienceGrid from "../../content/grid/ExperienceGrid";
import ProjectGrid from "../../content/grid/ProjectGrid";
import ExpertiseGrid from "../../content/grid/ExpertiseGrid";
import {Suspense} from "react";

function Body() {
    return (
        <>
            <Suspense>
                <Hero />
            </Suspense>
            <SectionTitle anchor="experiences" text="Experiences" highlight=""/>
            <ExperienceGrid />
            <SectionTitle anchor="projects" text="Projects" />
            <ProjectGrid />
            <SectionTitle anchor="expertise" text="Expertise" />
            <ExpertiseGrid />
        </>
    );
}

export default Body;