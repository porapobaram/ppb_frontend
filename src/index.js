import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import Login from "./ui/Login";

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
  </Provider>,
  document.getElementById("root")
);

console.log('test');