import React from 'react';
import './style.css';
import Card from '../Ui/Card';
import Logo from '../Logo';
import Navbar from '../navbar';

/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div>
        <Card>
          <div style={{padding:'75px 0'}}></div>
            <Logo/>
            <Navbar/>
        </Card>
    </div>
   )

 }

export default Hero