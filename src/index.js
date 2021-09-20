import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppHook from "./AppHook";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppHook />
  </React.StrictMode>,
  document.getElementById("root")
);
