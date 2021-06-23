import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //preparing the data - layout

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is a hook which allows us to call the information from the data-layout  (pull)
export const useStatevalue = () => useContext(StateContext);
