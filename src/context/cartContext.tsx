import { createContext, useContext, useReducer, useState } from "react";

const cartContext = createContext();

const initialValue = {
    // cart: [],
    // user: {},
    name: "Gabriel"
}


function cartReducer() {
    console.log("OK");
    
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialValue);
  return (
    <cartContext.Provider value={{ state, dispatch }}>{children}</cartContext.Provider>
  );
}

export const useCart = () => useContext(cartContext)
