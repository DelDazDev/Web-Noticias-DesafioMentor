import './App.css'
import React from 'react'
import  {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar.jsx";
import Home from "./pages/Home.jsx"
import New from "./pages/New.jsx";
import Popular from "./pages/Popular.jsx";
import Trending from "./pages/Trending.jsx";
import Categories from "./pages/Categories.jsx";


function App() {
  return(
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/new" element={<New />}/>
        <Route path="/popular" element={<Popular />}/>
        <Route path="/trending" element={<Trending />}/>
        <Route path="/categories" element={<Categories/>}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
