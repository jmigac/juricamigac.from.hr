import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import Header from "../components/structure/header/header/Header";
import Body from "../components/structure/body/Body"
import Footer from '../components/structure/footer/footer/Footer';
import axios from 'axios';
import {useState, useEffect} from 'react'

function OneWeb() {
    const homePageUrl = 'https://cache-function.juricamigac.from.hr/homePage';
    const [homePageData, setHomePageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get(homePageUrl);
          setHomePageData(response.data);
        }
        fetchData();
      }, []);

    if (homePageData) {
        return (
            <div>
                <Header />
                <Body data={homePageData} />
                <Footer />
            </div>
        );
    }
}

export default OneWeb;