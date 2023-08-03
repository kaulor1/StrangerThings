import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AddPost = () => {
    const navigate = useNavigate()
  return (
    <><div></div>
    <button onClick={() => navigate('success-message')}>Create</button>
    </> 
  )
}
