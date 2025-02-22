import Navigation from "../navigation/Navigation";

export default function Header({languageChange}) {
    return (
        <header>
            <Navigation languageChange={languageChange} />
        </header>
    );
}