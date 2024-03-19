import Teaser from "../../content/teaser/Teaser";
import Title from "../header/title/Title";
import ExperienceGrid from "../../content/grid/ExperienceGrid"
import Separator from "../../content/separator/Separator";
import SectionTitle from "../../content/section-title/SectionTitle";
import ProjectGrid from "../../content/grid/ProjectGrid";

function Body() {
    const altTextForBody = "Cover image for index page"

    return (
        <div>
            <Separator />
            <Title text="Jurica Migač" />
            <Separator />
            <Teaser imageSource="https://images.ctfassets.net/x9wbez5bxfw8/4phzvF1wyvRaK9PwmEbk6h/1aa18c128b72f92c65cfbb598c3ba7c9/main-photo.webp" 
                    altText={altTextForBody} 
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
