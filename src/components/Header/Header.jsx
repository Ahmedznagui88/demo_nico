import React, { useState } from 'react';

function Header() {

  return (
    <div className='container-fluid pt-5 bg-dark'>
      <div className='row'> 
      <div className='col-12 col-md-6'>
        <div>
        <img src="../../../public/media/img/beauty asian girl.avif" className='img-fluid' alt="immagine" />
        </div>
        </div>
        <div className='col-12 col-md-6'>
          Hi everyone this is a header
        </div>
      </div>
    </div>
    
  );
}

export default Header;
