import React from "react";
import ReactDOM from "react-dom/client";

import Router from "./routes/router";
import { GlobalStyles } from "./styles/global.styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>
);
