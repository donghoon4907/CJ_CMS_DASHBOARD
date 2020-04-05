import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import DashboardPresention from "./DashboardPresention";
import { LOG_OUT_REQUEST } from "../reducers/user";
import { showToast } from "./module";

const DashboardContainer = () => {
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      dispatch({
        type: LOG_OUT_REQUEST,
        payload: { toast: ({ type, message }) => showToast({ type, message }) }
      });
    }
  }, [dispatch]);
  return <DashboardPresention onLogout={onLogout} />;
};

export default DashboardContainer;
