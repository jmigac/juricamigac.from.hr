import Teaser from "../../content/teaser/Teaser";
import Title from "../header/title/Title";
import ExperienceGrid from "../../content/grid/ExperienceGrid"
import Separator from "../../content/separator/Separator";
import SectionTitle from "../../content/section-title/SectionTitle";
import ProjectGrid from "../../content/grid/ProjectGrid";
import ExpertiseGrid from "../../content/grid/ExpertiseGrid";

function Body(props) {
    const homePageData = props.data;
    return (
        <div>
            <Separator />
            <Title text={homePageData.title} />
            <Separator />
            <Teaser imageSource={homePageData.teaser.url} 
                    altText={homePageData.teaser.description}
                    alignment="center" />
            <SectionTitle anchor="experiences" title="Experiences" />
            <ExperienceGrid experiences={homePageData.experiencesCollection.items}/>
            <SectionTitle anchor="projects" title="Projects" />
            <ProjectGrid projects={homePageData.projectsCollection.items} />
            <SectionTitle anchor="expertise" title="Expertise" />
            <ExpertiseGrid expertises={homePageData.expertisesCollection.items} />
        </div>
    );
}

export default Body;
