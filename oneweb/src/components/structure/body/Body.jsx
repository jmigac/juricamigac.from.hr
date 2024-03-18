import Teaser from "../../content/teaser/Teaser";
import teaserImage from "../../../images/teaser.JPG"
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
            <Teaser imageSource={teaserImage} 
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