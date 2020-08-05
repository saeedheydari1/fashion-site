import React from 'react'
import './post.css'
import BlogPost from '../../component/blogPost/blogPost'
import SideBar from '../../component/SideBar/sidebar'
/**
* @author
* @function Post
**/

const Post = (props) => {
  return(
        <section className="container1">
            <BlogPost/>
            <SideBar/>
        </section>
   )

 }

export default Post