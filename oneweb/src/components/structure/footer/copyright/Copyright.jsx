import "../../../../styles/components/structure/footer/copyright/copyright.css"

function Copyright() {
    return (
        <p className="copyright">Just another copyright &copy; {(new Date().getFullYear())} Jurica Migač</p>
    );
}

export default Copyright;