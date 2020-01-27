import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import BarCrawlPage from "./ui/components/BarCrawlPage";

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <BarCrawlPage />
  </Provider>,
  document.getElementById("root")
);
