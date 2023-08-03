import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export const Posts = () => {
    
  return (
    <>
    <div>Posts</div>
    <input type='search' placeholder='Search Posts' />
     <nav>
       <Link to='addpost'>Add Post</Link>

     </nav>
     <Outlet />

    </> 
  )
}
