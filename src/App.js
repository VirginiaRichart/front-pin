import logo from './logo.svg';
import './App.css';
import Navbar from './common/Navbar';
import Carrusel from './views/Carrusel';
import { Route, Routes, } from "react-router-dom"
import Register from './views/Register';
import React from 'react';
import Acordeon from './views/Acordeon';
import Register2 from './views/Register2';

function App() {
  return (
    <>
      <Navbar />
      <Carrusel/>
      <Acordeon/>
      <div className="container mt-5" id="register">
        {/*<Register/>*/}
      </div>

      <div className="container mt-5" id="register">
        <Register2/>
      </div>

    </>
  );
}

export default App;
