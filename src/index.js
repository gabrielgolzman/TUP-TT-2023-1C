import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

import WrapperProvider from "./components/wrapperProvider/WrapperProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WrapperProvider>
      <App />
    </WrapperProvider>
  </React.StrictMode>
);
