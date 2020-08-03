import React from 'react';
import './App.css';
import Home from './container/Home';
import Header from './component/header';
import Hero from './component/Hero';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import ContactUs from './container/contactUs';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Hero/>
        <Route path='/' exact component={Home}/>
        <Route path='/contact-us' component={ContactUs}/>
      </Router>
    </div>
  );
}

export default App;
 