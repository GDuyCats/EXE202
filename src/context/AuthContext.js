import React, { createContext, useState, useEffect } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const saveToken = (userToken) => {
    const tokenString = JSON.stringify(userToken);
    setToken(userToken);
    localStorage.setItem('token', tokenString);
  };

  const removeToken = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      try {
        setToken(JSON.parse(savedToken));
        console.log(savedToken)
      } catch (e) {
        console.error("Invalid token format:", e);
        setToken(null);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, saveToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
