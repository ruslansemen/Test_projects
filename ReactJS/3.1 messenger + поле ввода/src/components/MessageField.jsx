import React from "react";
import Message from "./Message";
// import "../styles/styles.css";

export default class MessageField extends React.Component {
  state = {
    messages: [
      { text: "Привет!", sender: "bot" },
      { text: "Как дела?", sender: "bot" },
    ],
    input: "",
  };

  componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].sender === "me") {
      setTimeout(() => {
        this.setState({
          messages: [
            ...this.state.messages,
            { text: "Не приставай ко мне, я робот!", sender: "bot" },
          ],
        });
      }, 1000);
    }
  }

  handleClick = (message) => {
    this.sendMessage(message);
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleKeyUp = (event, message) => {
    if (event.keyCode === 13) {
      this.sendMessage(message);
    }
  };

  sendMessage = (message) => {
    this.setState({
      messages: [...this.state.messages, { text: message, sender: "me" }],
      input: "",
    });
  };

  render() {
    const MessageElements = this.state.messages.map((message, index) => (
      <Message key={index} text={message.text} sender={message.sender} />
    ));

    return (
      <div className="layoyt">
        <div className="message-field"> {MessageElements} </div>
        <input
          onChange={this.handleChange}
          onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}
          value={this.state.input}
        />
        <button onClick={() => this.handleClick(this.state.input)}>
          Отправить сообщение
        </button>
      </div>
    );
  }
}
