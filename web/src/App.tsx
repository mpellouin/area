import React from "react";
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
