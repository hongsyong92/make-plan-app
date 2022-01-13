import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import App from "./App";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>PRESENT PROGRESSIVE</title>
          </Helmet>
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  rootElement
);
