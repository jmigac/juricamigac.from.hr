import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import Header from "../components/structure/header/header/Header";
import Body from "../components/structure/body/Body"
import Footer from '../components/structure/footer/footer/Footer';
import {useQuery} from "react-query";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";


const Locales = {
    EN_US: 'en-US',
    HR_HR: 'hr-HR'
}

export default function OneWeb() {

    function HandleIconChange() {
        if (locale) {
            if (locale === Locales.HR_HR) {
                setIcon(engIcon);
            } else {
                setIcon(croIcon);
            }
        }
    }

    function HandleLanguageChange() {
        const currentLocale = Cookies.get("locale");
        if (currentLocale === Locales.EN_US) {
            setLocale(Locales.HR_HR);
            Cookies.set("locale", Locales.HR_HR);
            setIcon(croIcon);
        }

        if (currentLocale === Locales.HR_HR) {
            setLocale(Locales.EN_US);
            Cookies.set("locale", Locales.EN_US);
            setIcon(engIcon);
        }
        HandleIconChange();
        refetch();
    }

    const [oneWebData, setOneWebData] = useState({});
    const [locale, setLocale] = useState(null);
    const [loading, setLoading] = useState(false);
    const [engIcon, setEngIcon] = useState(null);
    const [croIcon, setCroIcon] = useState(null);
    const [icon, setIcon] = useState(null);
    const homePageUrl = 'https://api.juricamigac.from.hr/v1/oneweb/homePage';

    const fetchHomePage = async () => {
        let cookieLocale = Cookies.get('locale');
        const apiUrl = homePageUrl + "?locale=" + cookieLocale;
        const result = await fetch(apiUrl);
        return result.json();
    }

    useEffect(() => {
        setLoading(true);
        let cookieLocale = Cookies.get('locale');
        if (cookieLocale) {
            setLocale(cookieLocale);
        } else {
            setLocale(Locales.EN_US);
            Cookies.set('locale', Locales.EN_US);
        }
        const croImage = new Image();
        croImage.src = './static/languages/cro.png';
        setCroIcon(croImage.src);
        const engImage = new Image();
        engImage.src = './static/languages/eng.png';
        setEngIcon(engImage.src);

        if (locale && locale === Locales.HR_HR) {
            setIcon(engImage.src);
        } else {
            setIcon(croImage.src);
        }
    }, [locale]);

    const { data, status, refetch } = useQuery({
        queryKey: 'homePage',
        queryFn: fetchHomePage,
        enabled: !!locale
    });

    useEffect(() => {
        setOneWebData({ response: data, status: status, locale: locale });
        setLoading(false);
    }, [data, status, locale]);

    const buttonMarkup = (<img src={icon} width='16' height='16' alt='Locale changing icon' onClick={()=>{ HandleLanguageChange(); }}></img>);

    if (oneWebData.response && oneWebData.status === 'success' && !loading) {
        return (
            <>
                <Header languageChange={buttonMarkup} />
                <Body data={oneWebData.response} />
                <Footer data={oneWebData.response.footer}/>
            </>
        );
    }

}