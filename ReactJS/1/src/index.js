import React, { createElement } from "react";
import ReactDOM from "react-dom";

const messages = [
  { name: "Ivan", content: "Hello friend!" },
  { name: "Oleg", content: "Hi!" },
  { name: "Ivan", content: "How are you?" },
];

const Message = (props) => (
  <li>
    <strong>{props.name}</strong>: {props.content}
  </li>
);

const MessageList = ({ messages }) => null;

const mountPoint = document.getElementById("root");
ReactDOM.render(<Message name="Ivan" content="Hello!" />, mountPoint);
