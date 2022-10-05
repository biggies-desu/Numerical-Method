import '../App.css';
import '../css/styles.css';
import 'bootstrap';
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Bisection from './Bisection'
import Falseposition from './False-position'
import OnePoint from './One-point-Iteration'
import Newton from './Newton-Raphson'
import Secent from './Secent'


const NB =() =>{
    return (<Navbar bg="dark" variant="dark">
      
    <Container>
      <Navbar.Brand href="App.js">Numerical Method</Navbar.Brand>
      <Nav className="me-auto">
      <NavDropdown title="Root of Equation" id="Root_of_Equation">
          <NavDropdown.Item onClick={Bisection}>Bisection Method</NavDropdown.Item>
          <NavDropdown.Item onClick={Falseposition}>False-Position Method</NavDropdown.Item>
          <NavDropdown.Item eventKey={'OnePoint'}>One-point Iteration Method</NavDropdown.Item>
          <NavDropdown.Item eventKey  ={'Newton'}>Newton-Raphson Method</NavDropdown.Item>
          <NavDropdown.Item eventKey={'Secent'}>Secent Method</NavDropdown.Item>
          
          
      </NavDropdown>
      <NavDropdown title="Linear Algebraic Equations" id="Liner_Algebraic_Equation">
          <NavDropdown.Item href="#action3">Cramer's rule</NavDropdown.Item>
          <NavDropdown.Item href="#action3">Guess Elimination</NavDropdown.Item>
          <NavDropdown.Item href="#action3">Guess-Jordan Elimination</NavDropdown.Item>
          <NavDropdown.Item href="#action3">LU Decomposition</NavDropdown.Item>
          <NavDropdown.Item href="#action3">Cholesky Decomposition</NavDropdown.Item>
          <NavDropdown.Item href="#action3">Jacobi Iteration Method</NavDropdown.Item>
          <NavDropdown.Item href="#action3">Guess-Seidel Iteration</NavDropdown.Item>
          <NavDropdown.Item href="#action3">Conjugate Gradient Iteration</NavDropdown.Item>
      </NavDropdown>
      </Nav>   
      <Navbar.Brand>Decha Boonmapasap 6404062630350</Navbar.Brand>
    </Container>
  </Navbar>)
}
export default NB