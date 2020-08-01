import React from 'react'
import './style.css'
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Post</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
        <div className="search">
            <input placeholder="Search" type="text" />
            <img src={require('../../asset/icon/search.png')} alt="search"/>
        </div>
    </div>
   )

 }

export default Navbar