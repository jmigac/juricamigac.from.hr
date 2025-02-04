import { FaLinkedinIn, FaGithub, FaDev } from "react-icons/fa";
import "../../../../styles/components/structure/footer/social-media-links/social-media-links.css"
import "../../../../styles/global.css"

function SocialMediaLinks(props) {
    const socialMediaLinks = props.data;
    return (
        <div className="social-media-links flex center">
            { socialMediaLinks.showLinkedIn &&
                <a href={socialMediaLinks.linkedInUrl} 
                rel="noreferrer" 
                target="_blank"><FaLinkedinIn /></a>
            }
            { socialMediaLinks.showGithub && 
                <a href={socialMediaLinks.githubUrl} 
                rel="noreferrer"
                target="_blank"><FaGithub /></a>
            }
            { socialMediaLinks.showDevTo && 
                <a href={socialMediaLinks.devToUrl}
                rel="noreferrer"
                target="_blank"><FaDev /></a>
            }
        </div>
    );
}

export default SocialMediaLinks;