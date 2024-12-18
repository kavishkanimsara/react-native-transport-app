import React, { createContext, useState, useContext } from 'react';

const ClickCountContext = createContext();

export const ClickCountProvider = ({ children }) => {
  const [clickCount, setClickCount] = useState(0);

  const incrementClickCount = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <ClickCountContext.Provider value={{ clickCount, incrementClickCount }}>
      {children}
    </ClickCountContext.Provider>
  );
};

export const useClickCount = () => useContext(ClickCountContext);
