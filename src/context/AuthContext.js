import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));

  const saveToken = (userToken, userInfo) => {
    localStorage.setItem('token', userToken);
    localStorage.setItem('user_avatar', userInfo.avatar)
    localStorage.setItem('user', JSON.stringify(userInfo));
    setToken(userToken);
    setUser(userInfo);
  };

  const removeToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(savedUser);
    }
    console.log(user)
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, saveToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
