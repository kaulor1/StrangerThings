import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='primary-nav'>
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/posts'>Posts</NavLink>
       <NavLink to='/account'>Account</NavLink>
       <NavLink to='/profile'>Profile</NavLink>
    </nav>
  )
}
