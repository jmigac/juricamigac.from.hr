import {navigation} from "../../../../../lib/constants";
import {getSocialMedia} from "../../../../../lib/api";
import {v4} from "uuid";
import styles from "../../../../styles/components/structure/footer/footer/footer.module.css"

export default async function Footer() {
    const socialMediaCollection = await getSocialMedia();

    return (
        <footer className={`text-base-content rounded p-10 ${styles.footer} ${styles.footerCenter}`}>
            <nav className="grid grid-flow-col gap-4">
                {navigation.navItems.map((item) => <a key={item.key} href={item.link} className="link link-hover">{item.name}</a>)}
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    {socialMediaCollection.map((socialMediaItem) => <SocialMediaItem key={v4()} socialMediaItem={socialMediaItem} />)}
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
        </footer>
    );
}

const SocialMediaItem = (socialMediaItem) => {
    const item = socialMediaItem.socialMediaItem;
    const socialMediaIcon = getSocialMediaIcon(item);
    return (
        <a href={item.linkUrl} target='_blank' aria-label={item.ariaLabel}>
            {socialMediaIcon}
        </a>
    );
}

const getSocialMediaIcon = (socialMediaItem) => {
    if (socialMediaItem.icon === "DevTo") {
        return (<img src="static/social-media/devto.png" width={32} alt={socialMediaItem.ariaLabel} />);
    }

    if (socialMediaItem.icon === "Github") {
        return (<img src="static/social-media/github.png" width={32} alt={socialMediaItem.ariaLabel} />);
    }

    if (socialMediaItem.icon === "LinkedIn") {
        return (<img src="static/social-media/linkedin.png" width={32} alt={socialMediaItem.ariaLabel} />);
    }
}