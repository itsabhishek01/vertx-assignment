import React, { createContext, useState, useContext, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState({ currentPage: "Analytics" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.slice(1);
      const formatted =
        path.charAt(0).toUpperCase() + path.slice(1) || "Analytics";
      setAppState((prev) => ({
        ...prev,
        currentPage: formatted,
      }));
    }
  }, []);

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  );
};
