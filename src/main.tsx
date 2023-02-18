import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { allOptions } from "./options";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App options={allOptions} />
  </React.StrictMode>
);
