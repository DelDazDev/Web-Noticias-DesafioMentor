import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar.jsx";
import New from "../src/pages/New.jsx";
import Popular from "../src/pages/Popular.jsx";
import Trending from "../src/pages/Trending.jsx";
import Categories from "../src/pages/Categories.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/new" element={<New />}/>
        <Route path="/popular" element={<Popular />}/>
        <Route path="/trending" element={<Trending />}/>
        <Route path="/categories" element={<Categories/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
