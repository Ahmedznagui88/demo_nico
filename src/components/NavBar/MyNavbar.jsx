import React from 'react';

function MyNavbar() {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">SusanNail</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item px-3">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="#">Nostri Servizi</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="#">Chi siamo</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="#">Dove Siamo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contatti</a>
        </li>
      </ul>
    </div>
  </div>
</nav>  
);
}

export default MyNavbar;

  