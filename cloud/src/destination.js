import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

const Destination = () => {
  const abidjanCoords = [5.359952, -4.008256]; // Coordonnées d'Abidjan, Côte d'Ivoire

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <h1>Ma Page de Destination</h1>
              <p>Bienvenue sur notre site !</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="map-container">
                <MapContainer
                  center={abidjanCoords}
                  zoom={12}
                  style={{ height: '400px', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
                    OpenStreetMap</a> contributors'
                  />
                </MapContainer>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default Destination;
