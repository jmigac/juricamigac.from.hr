import React from 'react';
import ReactDOM from 'react-dom/client';
import {SpeedInsights} from "@vercel/speed-insights/react"
import {Analytics} from "@vercel/analytics/react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import OneWeb from './pages/OneWeb';
import GlucosePage from './pages/GlucosePage';
import {QueryClient, QueryClientProvider} from "react-query";
import TiglinAirsoftPage from "./pages/TiglinAirsoftPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

const airsoftPageInfo = {
    "title": "P.A.S Lepoglava",
    "weatherForecast": "Vremenska prognoza / Weather forecast",
    "weatherForecastDesc": "Vremenska prognoza za područje Jerovca",
}

root.render(
  <React.StrictMode>
    <SpeedInsights />
    <Analytics />
      <QueryClientProvider client={queryClient}>
          <Router>
              <Routes>
                  <Route path='/' element={<OneWeb />}></Route>
                  <Route path='/glucose' element={<GlucosePage />}></Route>
                  <Route path='/tiglin' element={<TiglinAirsoftPage title={airsoftPageInfo.title} weatherForecast={airsoftPageInfo.weatherForecast} weatherForecastDesc={airsoftPageInfo.weatherForecastDesc} />}></Route>
              </Routes>
          </Router>
      </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
