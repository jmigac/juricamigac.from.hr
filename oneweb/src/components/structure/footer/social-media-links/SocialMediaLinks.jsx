import { FaLinkedinIn, FaGithub, FaDev } from "react-icons/fa";
import "../../../../styles/components/structure/footer/social-media-links/social-media-links.css"
import "../../../../styles/global.css"

function SocialMediaLinks() {
    return (
        <div class="social-media-links flex center">
            <a href="https://www.linkedin.com/in/jmigac/" 
               rel="noreferrer" 
               target="_blank"><FaLinkedinIn /></a>
            <a href="https://www.github.com/jmigac" 
               rel="noreferrer"
               target="_blank"><FaGithub /></a>
            <a href="https://dev.to/jmigac" 
               rel="noreferrer"
               target="_blank"><FaDev /></a>
        </div>
    );
}

export default SocialMediaLinks;