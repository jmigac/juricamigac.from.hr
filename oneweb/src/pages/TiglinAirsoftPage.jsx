import "../styles/pages/glucose-page/glucose.css"
import 'react-loading-skeleton/dist/skeleton.css'
import Layout from "../components/structure/layouts/Layout";
import Skeleton from "react-loading-skeleton";

export default function TiglinAirsoftPage( { title, weatherForecast, weatherForecastDesc }) {
    return (
        <div className="tiglin-airsoft-page">
            <Layout>
                <h1>{title || <Skeleton />}</h1>
                <section>
                    <article>
                        <h2>{weatherForecast || <Skeleton />}</h2>
                        <p>{weatherForecastDesc || <Skeleton />}</p>
                    </article>
                </section>
            </Layout>
        </div>
    );
}