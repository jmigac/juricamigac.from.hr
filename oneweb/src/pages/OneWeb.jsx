import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import Header from "../components/structure/header/header/Header";
import Body from "../components/structure/body/Body"
import Footer from '../components/structure/footer/footer/Footer';
import {useQuery} from "react-query";


const homePageUrl = 'https://api.juricamigac.from.hr/v1/oneweb/homePage';
const fetchHomePage = async () => {
    const result = await fetch(homePageUrl);
    return result.json();
}

export default function OneWeb() {
    const { data, status } = useQuery("homePage", fetchHomePage);
    if (data && status === "success") {
        return (
            <>
                <Header />
                <Body data={data} />
                <Footer data={data.footer}/>
            </>
        );
    }
}