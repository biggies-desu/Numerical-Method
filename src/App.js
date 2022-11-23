import './App.css';
import './css/styles.css';
import 'bootstrap';
import React from "react";

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
import MatrixInversion from './Linear-Algebraic-Equations/Matrix-Inversion';
import LUDecomposition from './Linear-Algebraic-Equations/LU-Decomposition';
import CholeskyDecomposition from './Linear-Algebraic-Equations/Cholesky-Decomposition';
// 
import Jacobi from './Linear-Algebraic-Equations/Jacobi';
import GuessSeidel from './Linear-Algebraic-Equations/GaussSeidel';

import NewtonDevided from './Interpolation-and-Extrapolation/Newton-devided';
import Lagrange from './Interpolation-and-Extrapolation/Lagrange';
import Sprine from './Interpolation-and-Extrapolation/Sprine';

import Regression from './Regression/Regression';

function App() {
  const handleSelect = (eventKey) => alert(`${eventKey}`);//ตั้งไปงั้น
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
          <Route path="MatrixInversion" element={<MatrixInversion />}/>
          <Route path="LUDecomposition" element={<LUDecomposition />}/>
          <Route path="CholeskyDecomposition" element={<CholeskyDecomposition />}/>

          <Route path="Jacobi" element={<Jacobi />}/>
          <Route path="GuessSeidel" element={<GuessSeidel />}/>


          <Route path="NewtonDevided" element={<NewtonDevided />}/>
          <Route path="Lagrange" element={<Lagrange />}/>
          <Route path="Sprine" element={<Sprine />}/>

          <Route path="Regression" element={<Regression />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
    
      
  );
}

export default App;