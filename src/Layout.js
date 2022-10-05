

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            Linear-Equation
            <li>
              <Link to="/Bisection">Bisection Method</Link>
            </li>
            <li>
              <Link to="/Falseposition">False-position Method</Link>
            </li>
            <li>
              <Link to="/Onepoint">One-point Iteration</Link>
            </li>
            <li>
              <Link to="/Newton">Newton-Raphson Method</Link>
            </li>
            <li>
              <Link to="/Secent">Secent Method</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;