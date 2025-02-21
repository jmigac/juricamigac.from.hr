import "../../../../styles/components/structure/footer/copyright/copyright.css"

export default function Copyright() {
    return (
        <p className="copyright">Just another copyright &copy; {(new Date().getFullYear())} Jurica Migač</p>
    );
}