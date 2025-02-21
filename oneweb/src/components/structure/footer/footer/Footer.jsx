import Copyright from "../copyright/Copyright";
import "../../../../styles/components/structure/footer/footer/footer.css"
import SocialMediaLinks from "../social-media-links/SocialMediaLinks";

export default function Footer({ data }) {
    return (
        <footer className="footer">
            <Copyright />
            <SocialMediaLinks data={data.socialMediaLinks} />
        </footer>
    );
}