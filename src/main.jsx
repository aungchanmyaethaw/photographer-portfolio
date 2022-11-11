import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./contexts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>
);
