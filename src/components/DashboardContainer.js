import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardPresention from "./DashboardPresention";
import { LOG_OUT_REQUEST } from "../reducers/user";
import { showToast } from "./module";

const DashboardContainer = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const [activeMenu, setActiveMenu] = useState(1);

  const onClickMenuIcon = useCallback((menuNum) => {
    setActiveMenu(menuNum);
  }, []);
  const onLogout = useCallback(() => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      dispatch({
        type: LOG_OUT_REQUEST,
        payload: { toast: ({ type, message }) => showToast({ type, message }) }
      });
    }
  }, [dispatch]);
  return (
    <DashboardPresention
      userInfo={userInfo}
      activeMenu={activeMenu}
      onClickMenuIcon={onClickMenuIcon}
      onLogout={onLogout}
      asideWidth={80}
    />
  );
};

export default DashboardContainer;
