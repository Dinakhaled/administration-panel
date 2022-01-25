import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";

import App from "./containers/App";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
