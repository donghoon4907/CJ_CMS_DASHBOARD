import React from "react";
import { useSelector } from "react-redux";
import LoginContainer from "./LoginContainer";
import SignUpContainer from "./SignUpContainer";
import DashboardContainer from "./DashboardContainer";

const AuthComponent = () => {
  const { is_show_login_ui } = useSelector(state => state.common);
  const { userInfo } = useSelector(state => state.user);
  // return is_show_login_ui ? (
  //   <LoginContainer />
  // ) : userInfo ? (
  //   <DashboardContainer />
  // ) : (
  //   <SignUpContainer />
  // );
  return <DashboardContainer />;
};

export default AuthComponent;
