import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./context/Context";
import { CartProvider } from "./context/CartProvider";
import reducer, { initialState } from "./context/CartReducer";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <CartProvider initialState={initialState} cartReducer={reducer}>
        <App />
      </CartProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
