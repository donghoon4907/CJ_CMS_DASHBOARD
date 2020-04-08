import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { initialState as userInitialState } from "./reducers/user";
import SignUpContainer from "./components/SignUpContainer";

function renderWithRedux({ ui, initialState = {} }) {
  const store = createStore(reducer, initialState);
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

// test("check user state", () => {
//   expect(userInitialState).toHaveProperty("confirmedId", null);
// });
// test("id double check", async () => {
//   const { getByText, getByPlaceholderText } = renderWithRedux({
//     ui: <SignUpContainer />,
//     initialState: userInitialState
//   });
//   const value = "%RootMaster%";
//   fireEvent.change(getByPlaceholderText("계정을 입력하세요."), {
//     target: { value }
//   });
//   fireEvent.click(getByText("중복확인"));
//   await waitForExpect(() => {
//     expect(userInitialState.confirmedId).not.toEqual(null);
//   });
//   expect(userInitialState.confirmedId).toBe(value);
// });
