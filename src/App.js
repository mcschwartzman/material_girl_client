import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Homebar from './components/Homebar';
import Gallery from './components/Gallery';
import Title from './components/Title';
import Map from './components/Map';
import Description from './components/Description';
import Specs from './components/Specs';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Homebar />
        </Row>
        <Row>
          <Col>
            <Map />
          </Col>
          <Col md={8}>
            <Container className="p-0">
              <Row>
                <Title />
              </Row>
              <Row>
                <Col md={4}>
                  <Gallery />
                </Col>
                <Col md={4}>
                  <Row>
                    <Description />
                  </Row>
                  <Row>
                    <Col className="p-0">
                      <Description />
                    </Col>
                    <Col className="p-0">
                      <Description />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Specs />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>

          </Col>
        </Row>
        
        
        
      </div>
    )
  }
}

export default App;
