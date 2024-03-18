import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css'
import Header from "./components/structure/header/header/Header";
import Body from "./components/structure/body/Body"
import Footer from './components/structure/footer/footer/Footer';

function OneWeb() {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default OneWeb;