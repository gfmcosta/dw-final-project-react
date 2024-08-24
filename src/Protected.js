import React from 'react'
import { Navigate } from 'react-router-dom'
function Protected({ isAuth,isAdmin, children }) {
  if (!isAuth) {
    return <Navigate to="/login" />
  }
  if (!isAdmin) {
    return <Navigate to="/AcessoNegado" />
  }
  return children
}
export default Protected