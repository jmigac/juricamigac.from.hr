import Teaser from "../../content/teaser/Teaser";
import AboutMe from "../../content/about-me/AboutMe";
import ExperienceGrid from "../../content/grid/ExperienceGrid"
import SectionTitle from "../../content/section-title/SectionTitle";
import ProjectGrid from "../../content/grid/ProjectGrid";
import ExpertiseGrid from "../../content/grid/ExpertiseGrid";

function Body(props) {
    const homePageData = props.data;
    return (
        <>
            <Teaser imageSource={homePageData?.teaser?.url}
                    altText={homePageData?.teaser?.description}
                    title={homePageData?.title}
                    alignment="center" />
            <AboutMe data={homePageData?.aboutMe} />
            <SectionTitle anchor="experiences" title={homePageData.experiencesTitle?.title} />
            <ExperienceGrid experiences={homePageData?.experiencesCollection?.items}/>
            <SectionTitle anchor="projects" title={homePageData.projectsTitle?.title} />
            <ProjectGrid projects={homePageData?.projectsCollection?.items} />
            <SectionTitle anchor="expertise" title={homePageData.expertiseTitle?.title} />
            <ExpertiseGrid expertises={homePageData?.expertisesCollection?.items} />
        </>
    );
}

export default Body;
