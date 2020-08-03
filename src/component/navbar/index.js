import React , {useState} from 'react'
import './style.css'
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

  const[search , setSearch] = useState(false)


  const submitSearch = (e) => {
    e.preventDefault();
    alert('search')
  }

  const openSearch = () => {
    setSearch(true)
  }

  const searchClass = search ? 'searchinput active' : 'searchinput';

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Post</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
        <div className="search">
          <form onSubmit={submitSearch}>
            <input placeholder="Search" type="text" className={searchClass}/>
            <img className="searchicon" onClick={openSearch} src={require('../../asset/icon/search.png')} alt="search"/>
          </form>

        </div>
    </div>
   )

 }

export default Navbar