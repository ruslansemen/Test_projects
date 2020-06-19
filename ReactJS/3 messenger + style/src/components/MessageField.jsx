import React from "react";
import Message from "./Message";
// import "../styles/styles.css";

export default class MessageField extends React.Component {
  state = {
    messages: [
      { text: "Привет!", sender: "bot" },
      { text: "Как дела?", sender: "bot" },
    ],
  };

  handleClick = () => {
    this.setState({
      messages: [...this.state.messages, { text: "Нормально", sender: "me" }],
    });
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

  render() {
    const MessageElements = this.state.messages.map((message, index) => (
      <Message key={index} text={message.text} sender={message.sender} />
    ));

    return (
      <div className="layoyt">
        <div className="message-field"> {MessageElements} </div>
        <button onClick={this.handleClick}>Отправить сообщение</button>
      </div>
    );
  }
}
