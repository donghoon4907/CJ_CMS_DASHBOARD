import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";
import saga from "./saga";
import theme from "./theme";
import AuthComponent from "./components/AuthComponent";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;
// 리덕스 활성화
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const store = createStore(reducer, composeWithDevTools(middleware));
sagaMiddleware.run(saga);

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <AuthComponent />
      </Provider>
    </ThemeProvider>
  );
};
