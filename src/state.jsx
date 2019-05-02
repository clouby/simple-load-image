import React, { createContext, useReducer } from "react";

const StateContext = createContext();

export const StateProvider = ({ children, initialState, reducer }) => {
  return (
    <StateContext.Provider value={useReducer(initialState, reducer)}>
      {children}
    </StateContext.Provider>
  );
};
