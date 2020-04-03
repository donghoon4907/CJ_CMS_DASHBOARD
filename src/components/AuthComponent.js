import React from "react";
import { useSelector } from "react-redux";
import LoginContainer from "./LoginContainer";
import SignUpContainer from "./SignUpContainer";

const AuthComponent = () => {
  const { is_show_login_ui } = useSelector(state => state.common);
  return is_show_login_ui ? <LoginContainer /> : <SignUpContainer />;
};

export default AuthComponent;
