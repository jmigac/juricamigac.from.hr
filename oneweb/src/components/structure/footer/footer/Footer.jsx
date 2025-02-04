import Copyright from "../copyright/Copyright";
import "../../../../styles/components/structure/footer/footer/footer.css"
import SocialMediaLinks from "../social-media-links/SocialMediaLinks";

function Footer(props) {
    const footer = props.data;
    return (
        <footer className="footer">
            <Copyright />
            <SocialMediaLinks data={footer.socialMediaLinks} />
        </footer>
    );
}

export default Footer;