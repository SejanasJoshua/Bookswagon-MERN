import React, { useEffect, createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

//Wrap our App and provide the Data Layer
export const CartProvider = ({ cartReducer, initialState, children }) => {
  const [state] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("bookswagonCart", JSON.stringify(state.basket));
  }, [state.basket]);
  return (
    <StateContext.Provider value={useReducer(cartReducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
