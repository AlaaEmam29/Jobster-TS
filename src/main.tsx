import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./assets/css/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { SliderToggleProvider } from "./context/SliderToggleContext";
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SliderToggleProvider>
        <BrowserRouter>
        <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}> 

          <GlobalStyle />
          <App />
</StyleSheetManager>
        </BrowserRouter>
      </SliderToggleProvider>
    </Provider>
  </React.StrictMode>,
);
