import React, { createElement } from "react";
import ReactDOM from "react-dom";
// import App from "./components/App.jsx";

let messages = [
  { name: "Oleg", content: "Hello!" },
  { name: "Ivan", content: "Hello!" },
  { name: "Oleg", content: "How are you?" },
  { name: "Ivan", content: "I am fine, and you?" },
  { name: "Oleg", content: "Me too." },
];

// let message = {
//   name: "Oleg",
//   content: "How do you do?",
// };

let Element = (props) => (
  <li>
    {props.name}: {props.content}
  </li>
);

let MessageList = (props) => (
  <ul>
    {props.messages.map((item) => (
      <Element {...item} />
    ))}
  </ul>
);
const mountPoint = document.getElementById("root");
ReactDOM.render(<MessageList messages={messages} />, mountPoint);
