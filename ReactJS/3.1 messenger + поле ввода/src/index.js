import React, { createElement } from "react";
import ReactDOM from "react-dom";
import MessageField from "./components/MessageField";
// import "./styles/styles.css";

const mountPoint = document.getElementById("root");
ReactDOM.render(<MessageField />, mountPoint);
