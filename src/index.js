import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import BarPage from "./ui/components/BarPage/BarPageContainer";

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <BarPage />
  </Provider>,
  document.getElementById("root")
);
