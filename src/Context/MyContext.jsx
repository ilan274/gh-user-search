import React, { createContext, useState } from 'react';
import data from '../exampleData';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);
  const [userDetails, setUserDetails] = useState(data);
  const [loading, setLoading] = useState(false);

  const store = {
    username,
    error,
    userDetails,
    loading,
    setUsername: (user) => setUsername(user),
    setError: (value) => setError(value),
    setUserDetails: (data) => setUserDetails(data),
    setLoading: (value) => setLoading(value)
  };

  return <MyContext.Provider value={store}>{children}</MyContext.Provider>;
};

export { MyContext, MyProvider };
