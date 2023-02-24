import React from 'react'
import { Route, Navigate } from 'react-router-dom';


 
  


const PrivateRoute = ({ component: Component, isAuthenticated, token, ...rest }) => (
  
  <Route {...rest} render={(props) => (
    isAuthenticated && token
      ? <Component {...props} />
      : <Navigate to='/login' />
  )} />
);


  
  export default PrivateRoute;

