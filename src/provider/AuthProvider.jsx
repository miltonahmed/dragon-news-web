import React, { Children, createContext } from 'react'
import { useState } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const[user, setUser] = useState({
    name: 'milton ahmed',
    email: 'miltonahmedcse@gami.com'
  });
  const authData = {
    user, setUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
  
};

export default AuthProvider;