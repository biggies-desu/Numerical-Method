import './App.css';
import './css/styles.css';
import 'bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Numerical Method React project for education." />
        <meta name="author" content="TechnicalMaid :)" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>
        </head>
        <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
            &emsp;Numerical Method
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown Root of Equations">
                  <a class="btn btn-dark dropdown-toggle bg-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Root of Equation
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Bisection Method</a></li>
                    <li><a class="dropdown-item" href="#">False-Position Method</a></li>
                    <li><a class="dropdown-item" href="#">One-point Iteration Method</a></li>
                    <li><a class="dropdown-item" href="#">Newton-Raphson Method</a></li>
                    <li><a class="dropdown-item" href="#">Secent Method</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown Linear Algebraic Equations">
                  <a class="btn btn-dark dropdown-toggle bg-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Linear Algebraic Equations
                  </a>
                  <ul class="dropdown-menu dropdown-dark">
                    <li><a class="dropdown-item" href="#">Cramer's rule</a></li>
                    <li><a class="dropdown-item" href="#">Guess Elimination</a></li>
                    <li><a class="dropdown-item" href="#">Guess-Jordan Elimination</a></li>
                    <li><a class="dropdown-item" href="#">Matrix Inversion</a></li>
                    <li><a class="dropdown-item" href="#">LU Decomposition</a></li>
                    <li><a class="dropdown-item" href="#">Cholesky Decomposition</a></li>
                    <li><a class="dropdown-item" href="#">Jacobi Iteration Method</a></li>
                    <li><a class="dropdown-item" href="#">Guess-Seidel Iteration</a></li>
                    <li><a class="dropdown-item" href="#">Conjugate Gradient Iteration</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <a class="navbar-brand" href="#">
            &emsp;Decha Boonmapasap&emsp;6404062630350&emsp;
          </a>
        </nav>
        
        <div class="container">
            <div class="text-center fw-bold text-dark position-absolute top-50 start-50 translate-middle fs-3">
                <p>&#128514;&#128514;&#128514;&#128514;&#128514;&#128514;</p>
                <p>Numerical Method</p>
                <p>By</p>
                <p>Biggies-desu</p>
                <p>&#128151;&#128151;&#128151;&#128151;&#128151;&#128151;</p>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js "></script>
        <script src="js/scripts.js"></script>
        
        

    </body>
      </header>
    </div>
  );
}



export default App;
