import React from 'react';
import ReactDOM from 'react-dom/client';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import OneWeb from './pages/OneWeb';
import GlucosePage from './pages/GlucosePage';
import NotFoundPage from './pages/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SpeedInsights />
    <Analytics />
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<OneWeb />}></Route>
          <Route path='/glucose' element={<GlucosePage />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </Router>
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
