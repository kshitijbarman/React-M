import React, { createContext, useContext, useState } from "react";

// Create Theme Context
const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const prevalue = () => {
    setToggle((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ toggle, prevalue }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export Custom Hook for Using Theme
export const useDarkMode = () => {
  return useContext(ThemeContext);
};
