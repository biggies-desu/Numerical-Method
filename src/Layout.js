import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './css/styles.css';

const Layout = () => {
    return (
      <>
      <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Numerical Nethods</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Root of Equation"
              menuVariant="dark"
              >
              <NavDropdown.Item href="/Bisection">Bisection Method</NavDropdown.Item>
              <NavDropdown.Item href="/Falseposition">False-position Method</NavDropdown.Item>
              <NavDropdown.Item href="/Onepoint">One-point Iteration</NavDropdown.Item>
              <NavDropdown.Item href="/Newton">Newton-Raphson Method</NavDropdown.Item>
              <NavDropdown.Item href="/Secent">Secent Method</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Linear Algebraic Equations"
              menuVariant="dark"
              >
              <NavDropdown.Item href="/Cramer">Cramer's Rule</NavDropdown.Item>
              <NavDropdown.Item href="/GuessElim">Guess Elimination</NavDropdown.Item>
              <NavDropdown.Item href="/GuessJordan">Guess-Jordan Elimination</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Interpolation & Extrapolation"
              menuVariant="dark"
              >
              <NavDropdown.Item href="/NewtonDevided">Newton's Devided Difference</NavDropdown.Item>
              <NavDropdown.Item href="/Lagrange">Lagrange Polynomial</NavDropdown.Item>
              <NavDropdown.Item href="/Sprine">Sprine Interpolation</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Random links"
              menuVariant="dark"
              >
              <NavDropdown.Item href="https://www.youtube.com/channel/UCzwnZcrWBZqTySI9i5yzD4w">Youtube</NavDropdown.Item>
              <NavDropdown.Item href="https://twitter.com/Biggies_Desu">Twitter</NavDropdown.Item>
              <NavDropdown.Item href="https://osu.ppy.sh/users/9592236">osu! Profile</NavDropdown.Item>
              <NavDropdown.Item href="https://steamcommunity.com/id/biggies12345/">Steam</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/biggies-desu">My GitHub</NavDropdown.Item>
              <div class="dropdown-divider"></div>
              <NavDropdown.Item>Discord : TechnicalMaid#0595</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        <Navbar.Brand >Decha Boonmapasap</Navbar.Brand>
      </Container>
      
      </Navbar>
      <Outlet />
      </>
    )
  };
  
  export default Layout;