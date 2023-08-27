import React from 'react';

function Layout({ children }) {
  return (
      <div className="container">
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">WAWBOOKS</a><br />
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/generate-response">Text generation</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/generate-image">Image generation</a>
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

        <footer className="py-3 my-4">
          <div className="shadow p-3 mb-5 bg-body rounded">
            <div className="container">
              <p className="text-center text-muted">&copy; 2023 LeatherDiamond</p>
            </div>
          </div>
        </footer>
      </div>
  );
}

export default Layout;
