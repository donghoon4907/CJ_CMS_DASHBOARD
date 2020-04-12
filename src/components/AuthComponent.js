import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginContainer from "./LoginContainer";
import SignUpContainer from "./SignUpContainer";
import DashboardContainer from "./DashboardContainer";
import LoadingComponent from "./LoadingComponent";
import { LOAD_USER_REQUEST } from "../reducers/user";
import { showToast } from "../module/toast";

const AuthComponent = () => {
  const dispatch = useDispatch();
  const { is_show_login_ui, is_show_signup_ui } = useSelector(
    state => state.common
  );
  const { userInfo } = useSelector(state => state.user);
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: LOAD_USER_REQUEST,
        payload: {
          toast: ({ type, message }) => showToast({ type, message })
        }
      });
    }, 2000);
  }, [dispatch]);
  return is_show_login_ui ? (
    <LoginContainer />
  ) : userInfo ? (
    <DashboardContainer />
  ) : is_show_signup_ui ? (
    <SignUpContainer />
  ) : (
    <LoadingComponent />
  );
};

export default AuthComponent;
