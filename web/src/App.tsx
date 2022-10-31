import React from "react";
import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from "./view/Login";
import Register from "./view/Register";
import Footer from './components/Footer';
import Home from "./view/Home";
import AreaPage from "./view/Area";
// import Services from "./view/Services";

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/areas" element={<AreaPage />} />
          {/* <Route path="/services" element={<Services />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
