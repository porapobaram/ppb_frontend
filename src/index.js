import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import ButtonContainer from "./ui/components/ButtonPage/Button";

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <ButtonContainer />
  </Provider>,
  document.getElementById("root")
);
