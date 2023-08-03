import { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import './App.css'
import {Home} from './components/Home'
import {Posts} from './components/Posts'
import {Account} from './components/Account'
import {Profile} from './components/Profile'
import { Navbar } from './components/NavBar'
import { SuccessMessage } from './components/SuccessMessage'
import { NoPage } from './components/NoPage' 
import { AddPost } from './components/AddPost'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
     <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='posts' element={<Posts />}>
          <Route path='addpost' element={<AddPost />} /> 
        </Route>
        <Route path='account' element={<Account />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='posts/success-message' element={<SuccessMessage />}></Route>
        <Route path='*' element={<NoPage />}></Route>
      
     </Routes>
    </>
  )
}

export default App
