import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const ProtectedRoute = ({ element: Component }) => {
  const { token } = useContext(AuthContext);

  return token ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
