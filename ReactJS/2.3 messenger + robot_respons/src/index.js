import React, { createElement } from "react";
import ReactDOM from "react-dom";
import App from "./components/MessageField";

const mountPoint = document.getElementById("root");
ReactDOM.render(<App />, mountPoint);
