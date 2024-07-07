import React from 'react';
import { Link } from 'react-router-dom';
/* import { FaBars } from 'react-icons/fa'; */

function MyNavbar() {
  return (
<nav className="navbar navbar-expand-lg">
  <header className="container-fluid">
    <a className="navbar-brand" href="/">SusanNail</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item px-3">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="/servizi">Nostri Servizi</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="/VisiteCatalogo">Catalogo</a>
        </li>
      </ul>
    </div>
  </header>
</nav>
  );
}

export default MyNavbar;


{/* <nav className="navbar navbar-expand-lg">
  <header className="container-fluid">
    <a className="navbar-brand" href="/">SusanNail</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item px-3">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="/servizi">Nostri Servizi</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="/VisiteCatalogo">Catalogo</a>
        </li>
      </ul>
    </div>
  </header>
</nav>  */} 
  