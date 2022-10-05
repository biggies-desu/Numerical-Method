import './App.css';
import './css/styles.css';
import 'bootstrap';
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
//import Bisection from './js/Bisection'
//import Falseposition from './js/False-position'
//import OnePoint from './js/One-point-Iteration'
//import Newton from './js/Newton-Raphson'
//import Secent from './js/Secent'
import NB from './js/NB'


import Layout from "./Layout"
import Home from "./Home"
import Bisection from './Linear-Equation/Bisection';
import Falseposition from './Linear-Equation/False-position';
import Newton from './Linear-Equation/Newton';
import Onepoint from './Linear-Equation/Onepoint';
import Secent from './Linear-Equation/Secent';




function App() {
  const handleSelect = (eventKey) => alert(`${eventKey}`);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Bisection" element={<Bisection />} />
          <Route path="Falseposition" element={<Falseposition />} />
          <Route path="Onepoint" element={<Onepoint />} />
          <Route path="Newton" element={<Newton />} />
          <Route path="Secent" element={<Secent />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
      
  );
}



export default App;
