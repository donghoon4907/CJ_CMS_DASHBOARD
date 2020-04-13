import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardPresention from "./DashboardPresention";
import { LOG_OUT_REQUEST } from "../reducers/user";
import { GET_POSTLIST_REQUEST } from "../reducers/post";
import {
  GET_PROGRAMLIST_REQUEST,
  GET_GENRELIST_REQUEST,
  GET_AGEGRADELIST_REQUEST,
  GET_CHANNELLIST_REQUEST
} from "../reducers/program";

const DashboardContainer = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const {
    is_show_addpost_ui: isShowCreatePostModal,
    is_show_addprogram_ui: isShowCreateProgramModal
  } = useSelector((state) => state.common);
  const [activeMenu, setActiveMenu] = useState(1);

  // 메뉴 클릭
  const onClickMenuIcon = useCallback((menuNum) => {
    setActiveMenu(menuNum);
  }, []);
  // 로그아웃
  const onLogout = useCallback(() => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      dispatch({
        type: LOG_OUT_REQUEST
      });
    }
  }, [dispatch]);

  useEffect(() => {
    // 프로그램 목록을 가져옵니다.
    dispatch({
      type: GET_PROGRAMLIST_REQUEST,
      payload: {
        lastId: 0,
        limit: 20
      }
    });
    // 포스트 목록을 가져옵니다.
    dispatch({
      type: GET_POSTLIST_REQUEST,
      payload: {
        lastId: 0,
        limit: 20
      }
    });
    // 장르 목록을 가져옵니다.
    dispatch({
      type: GET_GENRELIST_REQUEST
    });
    // 연령등급 목록을 가져옵니다.
    dispatch({
      type: GET_AGEGRADELIST_REQUEST
    });
    // 채널 목록을 가져옵니다.
    dispatch({
      type: GET_CHANNELLIST_REQUEST
    });
  }, [dispatch]);
  return (
    <DashboardPresention
      userInfo={userInfo}
      activeMenu={activeMenu}
      isShowCreatePostModal={isShowCreatePostModal}
      isShowCreateProgramModal={isShowCreateProgramModal}
      onClickMenuIcon={onClickMenuIcon}
      onLogout={onLogout}
    />
  );
};

export default DashboardContainer;
