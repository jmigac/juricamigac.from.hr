import Teaser from "../../content/teaser/Teaser";
import Title from "../header/title/Title";
import ExperienceGrid from "../../content/grid/ExperienceGrid"
import Separator from "../../content/separator/Separator";
import SectionTitle from "../../content/section-title/SectionTitle";
import ProjectGrid from "../../content/grid/ProjectGrid";

function Body() {
    return (
        <div>
            <Separator />
            <Title text="Jurica Migač" />
            <Separator />
            <Teaser imageSource="./photo.webp" 
                    altText="Cover image for index page"
                    alignment="center" />
            <SectionTitle anchor="experiences" title="Experiences" />
            <ExperienceGrid />
            <SectionTitle anchor="projects" title="Projects" />
            <ProjectGrid />
            <Separator />
        </div>
    );
}

export default Body;
