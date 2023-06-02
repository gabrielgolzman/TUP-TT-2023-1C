import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";
import { AuthenticationContextProvider } from "./components/services/authentication/authentication.context";
import { ThemeContextProvider } from "./components/services/theme/theme.context";
import { APIContextProvider } from "./components/services/api/api.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <ThemeContextProvider>
        <APIContextProvider>
          <App />
        </APIContextProvider>
      </ThemeContextProvider>
    </AuthenticationContextProvider>
  </React.StrictMode>
);
