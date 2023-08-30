import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
      <div className="container">
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/"><img src="logo-image.png" alt="Logo" className='logo-image'/></Link><br />
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/generate-response">Text generation</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/generate-image">Image generation</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-shrink-0">
          <div className="container">
            {children}
          </div>
        </main>

        <footer className="footer mt-auto py-3 bg-body-tertiary">
        <div className="container">
          <span className="text-body-secondary">&copy; 2023 LeatherDiamond</span>
        </div>
      </footer>
      </div>
  );
}

export default Layout;
