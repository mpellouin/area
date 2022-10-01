import React from "react";
import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Login from "./view/Login";
import Register from "./view/Register";
import Footer from './components/Footer';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
