import React, { createContext, useState, useEffect } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => { 
  const [token, setToken] = useState(null);
  const saveToken = (userToken) => {
    setToken(userToken);
    localStorage.setItem('token', userToken);
  };

  const removeToken = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, saveToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
