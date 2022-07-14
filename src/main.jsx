import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormPage from './components/pages/FormPage';
import FillPage from "./components/pages/FillPage"
import InfoPage from './components/pages/InfoPage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FillPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/info" element={<InfoPage />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
