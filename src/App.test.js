import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { initialState } from "./reducers/common";
import AuthComponent from "./components/AuthComponent";
// import SignUpContainer from "./components/SignUpContainer";

function renderWithRedux({ ui, store = createStore(reducer, initialState) }) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

// test("id dbcheck in signup page", () => {
//   const { getByText } = renderWithRedux({
//     ui: <SignUpContainer />
//   });
//   fireEvent.click(getByText("회원 가입"));
// });
