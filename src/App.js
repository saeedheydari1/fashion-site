import React from 'react';
import './App.css';
import Home from './container/Home';
import Header from './component/header';
import Hero from './component/Hero';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import ContactUs from './container/ContactUs/index';
import Post from './container/Post/post';
import AboutUs from './container/AboutUs/index';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Hero/>
        <Route path='/' exact component={Home}/>
        <Route path='/contact-us' component={ContactUs}/>
        <Route path='/post' component={Post} />
        <Route path='/about-us' component={AboutUs} />
      </Router>
    </div>
  );
}

export default App;
 