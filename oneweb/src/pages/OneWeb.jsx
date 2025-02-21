import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import Header from "../components/structure/header/header/Header";
import Body from "../components/structure/body/Body"
import Footer from '../components/structure/footer/footer/Footer';
import {useQuery} from "react-query";
import {useEffect, useState} from "react";
import ReactGA from 'react-ga4';

const TRACKING_ID = "G-9913LRFYPE"
export default function OneWeb() {

    const [oneWebData, setOneWebData] = useState({});
    const [loading, setLoading] = useState(false);
    const homePageUrl = 'https://api.juricamigac.from.hr/v1/oneweb/homePage';
    const fetchHomePage = async () => {
        const result = await fetch(homePageUrl);
        return result.json();
    }

    useEffect(() => {
        setLoading(true);
    }, []);

    const { data, status } = useQuery('homePage', fetchHomePage);

    useEffect(() => {
        setOneWebData({ response: data, status: status });
        setLoading(false);
    }, [data, status]);

    useEffect(() => {
        ReactGA.initialize(TRACKING_ID);
        ReactGA.send({ hitType: "pageview", page: "/", title: "Jurica Migač" });
    }, []);

    if (oneWebData.response && oneWebData.status === 'success' && !loading) {
        return (
            <>
                <Header />
                <Body data={oneWebData.response} />
                <Footer data={oneWebData.response.footer}/>
            </>
        );
    }

}