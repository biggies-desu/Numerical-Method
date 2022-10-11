import './App.css';
import './css/styles.css';
import 'bootstrap';
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
//import Bisection from './js/Bisection'
//import Falseposition from './js/False-position'
//import OnePoint from './js/One-point-Iteration'
//import Newton from './js/Newton-Raphson'
//import Secent from './js/Secent'


import Layout from "./Layout"
import Home from "./Home"

import Bisection from './Root-of-Equation/Bisection';
import Falseposition from './Root-of-Equation/False-position';
import Newton from './Root-of-Equation/Newton';
import Onepoint from './Root-of-Equation/Onepoint';
import Secent from './Root-of-Equation/Secent';

import Cramer from './Linear-Algebraic-Equations/Cramer-rule'
import GuessElim from './Linear-Algebraic-Equations/Guess-Elim';
import GuessJordan from './Linear-Algebraic-Equations/Guess-Jordan';

import NewtonDevided from './Interpolation-and-Extrapolation/Newton-devided';
import Lagrange from './Interpolation-and-Extrapolation/Lagrange';
import Sprine from './Interpolation-and-Extrapolation/Sprine';

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

          <Route path="Cramer" element={<Cramer />} />
          <Route path="GuessElim" element={<GuessElim />}/>
          <Route path="GuessJordan" element={<GuessJordan />}/>

          <Route path="NewtonDevided" element={<NewtonDevided />}/>
          <Route path="Lagrange" element={<Lagrange />}/>
          <Route path="Sprine" element={<Sprine />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
    
      
  );
}



export default App;
