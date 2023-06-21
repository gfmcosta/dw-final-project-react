import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ path, element: Element, isAdmin, isAuth }) => {
  if (isAuth) {
    if (isAdmin) {
      return <Route path={path} element={<Element />} />;
    } else {
      return <Navigate to="/acessoNegado" />;
    }
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
