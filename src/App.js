import React from 'react';
import './App.css';
import Home from './container/Home';
import Header from './component/header';
import Hero from './component/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <div>
        <Row>
          <Col xs={12} md={8}>
            saeeed
          </Col>
          <Col xs={6} md={4}>
            heydari
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
 