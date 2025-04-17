import {navigation} from "../../../../../lib/constants";

export default function Navigation() {
    const navigationItems = navigation.navItems.map((item) =>
        <li key={item.key}><a className='text-gray-500 transition hover:text-gray-500/75' href={item.link}>{item.name}</a></li>);
    return (
        <section className="mb-5 max-w-screen-xl px-4 py-8 mx-auto flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-end md:justify-between">
                <nav aria-label="Global" className="md:block">
                    <ul className="flex items-center gap-6 text-sm">
                        {navigationItems}
                    </ul>
                </nav>
            </div>
        </section>
    );
}