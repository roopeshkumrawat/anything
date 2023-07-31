import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/GlobalComponent/Navbar';
import Footer from './Components/GlobalComponent/Footer';
import Home from './Components/AppComponents/Home';
import Tools from './Components/AppComponents/Tools';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Tools/>
      <Footer />
    </>
    
  );
}

export default App;
