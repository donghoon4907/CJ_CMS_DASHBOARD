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
  const { loadedPost } = useSelector((state) => state.post);
  const { loadedProgram } = useSelector((state) => state.program);

  const [activeMenu, setActiveMenu] = useState(1); // 현재 선택된 메뉴
  const [pgmStartDate, setPgmStartDate] = useState(
    moment().subtract(7, "d").toDate()
  ); // 프로그램 시작일
  const [postStartDate, setPostStartDate] = useState(
    moment().subtract(7, "d").toDate()
  ); // 포스트 시작일
  const [pgmEndDate, setPgmEndDate] = useState(new Date()); // 프로그램 마감일
  const [postEndDate, setPostEndDate] = useState(new Date()); // 포스트 마감일
  const [pgmSearchKeyword, setPgmSearchKeyword] = useState(""); // 프로그램 검색어
  const [postSearchKeyword, setPostSearchKeyword] = useState(""); // 포스트 검색어
  const [pgmSort, setPgmSort] = useState("createdAt,DESC"); // 프로그램 정렬
  const [postSort, setPostSort] = useState("createdAt,DESC"); // 포스트 정렬

  const onChangePgmSearchKeyword = useCallback((e) => {
    setPgmSearchKeyword(e.target.value);
  }, []);

  const onChangePostSearchKeyword = useCallback((e) => {
    setPostSearchKeyword(e.target.value);
  }, []);

  const onChangePgmSort = useCallback((e) => {
    setPgmSort(e.target.value);
  }, []);

  const onChangePostSort = useCallback((e) => {
    setPostSort(e.target.value);
  }, []);

  // 부메뉴 클릭 (현재: 프로그램, 포스트)
  const onClickSubMenuItem = useCallback((menuNum) => {
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
      pgmStartDate={pgmStartDate}
      postStartDate={postStartDate}
      pgmEndDate={pgmEndDate}
      postEndDate={postEndDate}
      setPgmStartDate={setPgmStartDate}
      setPostStartDate={setPostStartDate}
      setPgmEndDate={setPgmEndDate}
      setPostEndDate={setPostEndDate}
      pgmSearchKeyword={pgmSearchKeyword}
      postSearchKeyword={postSearchKeyword}
      pgmSort={pgmSort}
      postSort={postSort}
      onChangePgmSearchKeyword={onChangePgmSearchKeyword}
      onChangePostSearchKeyword={onChangePostSearchKeyword}
      onChangePgmSort={onChangePgmSort}
      onChangePostSort={onChangePostSort}
      onClickSubMenuItem={onClickSubMenuItem}
      onClickAddPostBtn={onClickAddPostBtn}
      onClickAddProgramBtn={onClickAddProgramBtn}
    />
  );
};
export default PublishContainer;
