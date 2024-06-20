import React, { useState } from 'react';

const MyComponent = () => {

  return (
    <div className='container text-center'>
      <div className='row'>
        <div className='col-12 text-center pt-5'>
          <h2>Nostri Servizi e Prezzi</h2>
        </div>
        <div className='col-12 col-md-4 p-5'><h3>EPILAZIONE/CERETTA/LASER</h3></div>
        <div className='col-12 col-md-4 p-5'><h3>TRATTAMENTI VISO E CORPO</h3></div>
        <div className='col-12 col-md-4 p-5'><h3>TRUCCO SEMI PERMANENTE</h3></div>

        <div className='col-12 col-md-4 p-5'><h3>EXTENSION CIGLIA</h3></div>
        <div className='col-12 col-md-4 p-5'><h3>RICOSTRUZIONE UNGHIE</h3></div>
        <div className='col-12 col-md-4 p-5'><h3>MANICURE</h3></div>

        <div className='col-12 text-center p-5'><h2>PEDICURE</h2></div>

      </div>
    </div>

  );
};

export default MyComponent;
