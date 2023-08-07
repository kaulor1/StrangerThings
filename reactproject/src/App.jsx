
import {Routes, Route,} from 'react-router-dom'
import './App.css'
import {Home} from './components/Home'
import { Navbar } from './components/NavBar'
import { NoPage } from './components/NoPage'
import Page from './components/Page'
import Signup from './components/Signup'
import Posts from './components/Posts'
import { useState } from 'react'
import Delete from './components/Delete'

function App() {
 const [ token, setToken ]= useState('')

  return (
    <>
    <Navbar />
     <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/page' element={<Page token={token} />}>  
        </Route>
        <Route path='/signup' element={<Signup setToken={setToken}/>}></Route>
        <Route path='*' element={<NoPage />}></Route>
        <Route path='/posts/*' element={<Posts token={token} />}></Route>
        <Route path='/updatePosts' element={<updatePosts />}></Route>
        <Route path='/delete' element={<Delete />}></Route>
     </Routes> 
    </>
  )
}

export default App
