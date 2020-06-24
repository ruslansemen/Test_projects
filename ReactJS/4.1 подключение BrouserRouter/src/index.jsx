import React, { createElement } from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router";
// import MessageField from "./components/MessageField";
// import "./styles/styles.css";
import { BrowserRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const mountPoint = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider>
      <Router />
    </MuiThemeProvider>
  </BrowserRouter>,
  mountPoint
);
