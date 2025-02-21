import {FaDev, FaGithub, FaLinkedinIn} from "react-icons/fa";
import "../../../../styles/components/structure/footer/social-media-links/social-media-links.css"
import "../../../../styles/global.css"

export default function SocialMediaLinks({ data }) {
    return (
        <div className="social-media-links flex center">
            { data.showLinkedIn &&
                <a href={data.linkedInUrl}
                   rel="noreferrer"
                   aria-label={data.linkedInAriaLabel}
                   target="_blank"><FaLinkedinIn /></a>
            }
            { data.showGithub &&
                <a href={data.githubUrl}
                   rel="noreferrer"
                   aria-label={data.githubAriaLabel}
                   target="_blank"><FaGithub /></a>
            }
            { data.showDevTo &&
                <a href={data.devToUrl}
                   rel="noreferrer"
                   aria-label={data.devToAriaLabel}
                   target="_blank"><FaDev /></a>
            }
        </div>
    );
}