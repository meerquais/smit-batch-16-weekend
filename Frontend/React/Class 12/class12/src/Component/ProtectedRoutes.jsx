import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoutes({  isAuth  , children}) {
  
  

  if(!isAuth){
    return <Navigate to="/login" />
  }

  return children



}

export default ProtectedRoutes