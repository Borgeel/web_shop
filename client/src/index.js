import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import { AuthProvider } from "./hooks/useAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_PUBLIC_GOOGLE_API_TOKEN}>
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <DataProvider>
            <App />
          </DataProvider>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
