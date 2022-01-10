import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
* {margin:0;padding:0;font:inherit;color:inherit;}
*, :after, :before {box-sizing:border-box;flex-shrink:0;}
:root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;-moz-tab-size:4;tab-size:4}
html, body {height:100%;}
body {font-family: 'Noto Sans KR', sans-serif;}
img, picture, video, canvas, svg {display: block;max-width:100%;}
button {background:none;border:0;cursor:pointer;}
a {text-decoration:none; color:inherit;}
table {border-collapse:collapse;border-spacing:0}
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
