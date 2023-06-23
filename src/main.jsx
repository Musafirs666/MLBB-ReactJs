import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HoverContextProvider } from "./component/context/HoverContext.jsx";
import { AuthContextProvider } from "./component/context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HoverContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </HoverContextProvider>
  </React.StrictMode>
);
