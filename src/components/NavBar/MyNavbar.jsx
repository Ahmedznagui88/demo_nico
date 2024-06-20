import React from 'react';

function MyNavbar() {
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">SusanNail</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item px-3">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="#">Nostri Servizi</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="#">Chi siamo</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="#">Dove Siamo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contatti</a>
        </li>
      </ul>
    </div>
  </div>
</nav>  
);
}

export default MyNavbar;

  