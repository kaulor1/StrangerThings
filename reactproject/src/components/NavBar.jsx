import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='primary-nav'>
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/posts'>Posts</NavLink>
       <NavLink to='/signup'>Account</NavLink>
       {/* <NavLink to='/page'>Profile</NavLink> */}
    </nav>
  )
}
