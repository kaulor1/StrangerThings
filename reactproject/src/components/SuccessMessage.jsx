import React from 'react'
import { useNavigate } from 'react-router-dom'
export const SuccessMessage = () => {
  const navigate = useNavigate()
  
  
  return (
    <div>SuccessMessage!!
    <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}
