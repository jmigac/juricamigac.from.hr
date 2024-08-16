import Copyright from "../copyright/Copyright";
import "../../../../styles/components/structure/footer/footer/footer.css"
import SocialMediaLinks from "../social-media-links/SocialMediaLinks";

function Footer() {
    return (
        <footer className="footer">
            <Copyright />
            <SocialMediaLinks />
        </footer>
    );
}

export default Footer;