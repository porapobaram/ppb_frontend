import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
// import Login from "./ui/components/LoginPage";
import Feed from "./ui/components/Feed";

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <Feed />
  </Provider>,
  document.getElementById("root")
);
