import React, { createElement } from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router";
import MessageField from "./components/MessageField";
// import "./styles/styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ChatList from "./components/ChatList";

const mountPoint = document.getElementById("root");
ReactDOM.render(
  <MuiThemeProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          It's main page
        </Route>

        <Route path="/chats">
          <ChatList />
          <Switch>
            <Route exact path="/chats" component={MessageField} />
            <Route exact path="/chats/:id" component={MessageField} />
          </Switch>
        </Route>

        <Route exact path="/about">
          It's about page
        </Route>
        <Route exact path="/contacts">
          It's contacts page
        </Route>
        <Route exact path="/contacts/how">
          It's contacts how page
        </Route>
        <Route path="/">It's 404 page</Route>
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>,
  mountPoint
);
