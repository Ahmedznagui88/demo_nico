import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const YOUR_API_KEY = 'AIzaSyBQQ6FljWRcGGd2BHNJKeRT-SvokbC-ib4'; 

const Location = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 44.6406391, lng: 11.1894695 }); 

  return (
    <Container style={{ paddingBottom: '30px' }}>
      <Row>

       <Col sm={12} md={12} style={{ textAlign: 'center' , paddingTop: '20px' , paddingBottom: '20px' }}>
          <h3>Dove Siamo</h3>
        </Col>

        <Col sm={12} md={6}>
          <LoadScript
            googleMapsApiKey={YOUR_API_KEY}
            libraries={["places"]} 
          >
            <GoogleMap
              mapContainerStyle={{ height: '400px', width: '100%' }}
              zoom={16}
              center={mapCenter}
              onClick={(event) => setMapCenter(event.latLng)} 
            >
              <Marker position={mapCenter} />
            </GoogleMap>
          </LoadScript>
        </Col>
        
        <Col sm={12} md={6} style={{ textAlign: 'center' }}>
          <div>
            Via Cento, 2, 40017 San Giovanni in Persicieto BO
          </div>
          <div>
            {}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Location;



