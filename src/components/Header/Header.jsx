import React, { useState } from 'react';

function Header() {

  return (
    <div className='container-fluid'>
      <div className='row'> 
      <div className='col-12 col-md-6'>
        <div>
        <img src="../../../public/media/img/spa2.avif" className='w-100' alt="immagine" />
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
