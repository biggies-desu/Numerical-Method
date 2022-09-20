import './App.css';
import './css/styles.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Numerical Method React project for education." />
        <meta name="author" content="TechnicalMaid :)" />
        </head>
        <body>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
            Numerical Method
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
                  <ul class="dropdown-menu dropdown-  dark">
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
        </nav>
        <div class="container">
            <div class="text-center mt-5">
                <h1>NUMERICAL METHOD</h1>
                <p class="lead">คือ กุไม่รู้ไง</p>
                <p>เดชา บุญมาพาทรัพย์</p>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        

    </body>
      </header>
    </div>
  );
}

export default App;
