import React from "react";
import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Login from "./view/Login";
import Register from "./view/Register";

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
