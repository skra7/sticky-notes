import React, { createContext, useContext, useReducer } from "react";

// Preparing the Data layer
export const StateContext = createContext();

// Higher Order Component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Hook which allows to pull info from data layer
export const useStateValue = () => useContext(StateContext);
