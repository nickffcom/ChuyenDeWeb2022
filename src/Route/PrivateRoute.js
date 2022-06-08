import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute({isAllowed,reDirectpath='/login',children}) {

    if(!isAllowed){
        return <Navigate to={reDirectpath} replace/>
    }
  return children?children:<Outlet/>
}
