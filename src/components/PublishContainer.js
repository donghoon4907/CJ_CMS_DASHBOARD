import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import PublishPresentaion from "./PublishPresentaion";
import {
  SHOW_ADDPOSTMODAL_REQUEST,
  SHOW_ADDPROGRAMMODAL_REQUEST
} from "../reducers/common";

const PublishContainer = () => {
  const dispatch = useDispatch();
  const { loadedPost } = useSelector(state => state.post);
  const { loadedProgram } = useSelector(state => state.program);
  const [activeMenu, setActiveMenu] = useState(1); // 현재 선택된 메뉴
  const [startDate, setStartDate] = useState(
    // 시작일
    moment()
      .subtract(7, "d")
      .toDate()
  );
  const [endDate, setEndDate] = useState(new Date()); // 마감일
  // 부메뉴 클릭 (현재: 프로그램, 포스트)
  const onClickSubMenuItem = useCallback(menuNum => {
    setActiveMenu(menuNum);
  }, []);
  // 포스트 등록 버튼 클릭
  const onClickAddPostBtn = useCallback(() => {
    dispatch({
      type: SHOW_ADDPOSTMODAL_REQUEST
    });
  }, [dispatch]);
  // 프로그램 등록 버튼 클릭
  const onClickAddProgramBtn = useCallback(() => {
    dispatch({
      type: SHOW_ADDPROGRAMMODAL_REQUEST
    });
  }, [dispatch]);

  return (
    <PublishPresentaion
      loadedPost={loadedPost}
      loadedProgram={loadedProgram}
      activeMenu={activeMenu}
      startDate={startDate}
      endDate={endDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      onClickSubMenuItem={onClickSubMenuItem}
      onClickAddPostBtn={onClickAddPostBtn}
      onClickAddProgramBtn={onClickAddProgramBtn}
    />
  );
};
export default PublishContainer;
