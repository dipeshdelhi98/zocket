import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import ChooseProduct from "./pages/ChooseProduct";
import CampaignSetting from "./pages/CampaignSetting";


export default function App() {
  return (

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/chooseproduct" exact element={<ChooseProduct/>} />
          <Route path="/campaignsetting" exact element={<CampaignSetting/>} />
         
        </Routes>
      </Router>
  
  );
}
