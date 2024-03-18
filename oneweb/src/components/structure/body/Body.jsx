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
            <Title text="Jurica Migač" />
            <Separator />
            <Teaser imageSource="https://images.ctfassets.net/x9wbez5bxfw8/4phzvF1wyvRaK9PwmEbk6h/95acef800e131814c634af3c5f7b0f6a/main-photo.JPG" 
                    altText={altTextForBody} 
                    alignment="center" />
            <Separator />
            <SectionTitle anchor="experiences" title="Experiences" />
            <ExperienceGrid />
            <Separator />
            <SectionTitle anchor="projects" title="Projects" />
            <ProjectGrid />
            <Separator />
        </div>
    );
}

export default Body;