import "./global.css"
import logo512 from "../public/logo512.jpeg";
import {Analytics} from "@vercel/analytics/next";

export const metadata = {
    title: 'Jurica Migač | Software Engineer',
    description: 'Experienced Java developer, enthusiast in researching of crafting custom solutions through various web technologies.',
    author: 'Jurica Migač',
    generator: 'Next.js',
    creator: 'Jurica Migač',
    canonical: 'https://juricamigac.from.hr/',
    metadataBase: new URL('https://juricamigac.from.hr'),
    openGraph: {
        title: 'Jurica Migač | Software Engineer',
        description: 'Experienced Java developer, enthusiast in researching of crafting custom solutions through various web technologies.',
        url: 'https://juricamigac.from.hr',
        siteName: 'Jurica Migač',
        images: [
            {
                url: `${logo512.src}`,
                width: 512,
                height: 512,
                alt: ''
            }
        ],
        locale: 'en_US',
        type: 'website'
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Analytics />
                {children}
            </body>
        </html>
    )
}
