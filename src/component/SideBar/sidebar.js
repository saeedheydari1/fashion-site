import React from 'react';
import './sideBar.css'
import Card from '../Ui/Card';

/**
* @author
* @function SideBar
**/

const SideBar = (props) => {
  return(
    <div className="sidebarContainer">
      
      <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileimage">
          <img src="https://www.persiantvseries.com/wp-content/uploads/amir-hossein-arman-photo.jpg"/>
        </div>
        <div className="cardBody">
          <p className="personalBio">My name is saeed heydari im front developer and i live bonab and i study ce .</p>
        </div>
      </Card>

      <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>

      <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>Recent Post</span>
        </div>
        <div className="recentPosts">
          <div className="recentPost">
            <h3>Post Title</h3>
            <span>July 21 , 2020</span>
          </div>
        </div>
        <div className="recentPosts">
          <div className="recentPost">
            <h3>Post Title2</h3>
            <span>July 23 , 2020</span>
          </div>
        </div>
      </Card>

    </div>
   )

 }

export default SideBar