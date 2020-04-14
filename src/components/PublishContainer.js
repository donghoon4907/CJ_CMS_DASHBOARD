import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import PublishPresentaion from "./PublishPresentaion";
import {
  SHOW_ADDPOSTMODAL_REQUEST,
  SHOW_ADDPROGRAMMODAL_REQUEST
} from "../reducers/common";
import {
  GET_PROGRAMLIST_REQUEST,
  INIT_PROGRAMLIST_REQUEST
} from "../reducers/program";

const PublishContainer = () => {
  const dispatch = useDispatch();

  const { loadedPost, isGetListLoading: isLoadingPost } = useSelector(
    (state) => state.post
  );
  const {
    loadedProgram,
    loadedChannel,
    isGetListLoading: isLoadingPgm
  } = useSelector((state) => state.program);

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
  const [pgmChannel, setPgmChannel] = useState(""); // 프로그램 채널

  const onChangePgmSearchKeyword = useCallback((e) => {
    setPgmSearchKeyword(e.target.value);
  }, []);

  const onChangePostSearchKeyword = useCallback((e) => {
    setPostSearchKeyword(e.target.value);
  }, []);

  const onChangePgmSort = useCallback(
    (e) => {
      setPgmSort(e.target.value);
      dispatch({
        type: INIT_PROGRAMLIST_REQUEST
      });
      dispatch({
        type: GET_PROGRAMLIST_REQUEST,
        payload: {
          lastId: 0,
          limit: 20,
          searchKeyword: pgmSearchKeyword,
          startDate: moment(pgmStartDate).format("YYYY-MM-DD"),
          endDate: moment(pgmEndDate).format("YYYY-MM-DD"),
          sort: e.target.value
        }
      });
    },
    [pgmSearchKeyword, pgmStartDate, pgmEndDate, dispatch]
  );

  const onChangePostSort = useCallback((e) => {
    setPostSort(e.target.value);
  }, []);

  const onChangePgmChannel = useCallback((e) => {
    setPgmChannel(e.target.value);
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
  // 엔터 검색
  const onKeyDownPgmSearchKeyword = useCallback(
    (e) => {
      if (e.key === "Enter") {
        dispatch({
          type: INIT_PROGRAMLIST_REQUEST
        });
        dispatch({
          type: GET_PROGRAMLIST_REQUEST,
          payload: {
            lastId: 0,
            limit: 20,
            searchKeyword: e.target.value,
            startDate: moment(pgmStartDate).format("YYYY-MM-DD"),
            endDate: moment(pgmEndDate).format("YYYY-MM-DD")
          }
        });
        setPgmSort("createdAt,DESC");
      }
    },
    [pgmStartDate, pgmEndDate, dispatch]
  );
  // 클릭 검색
  const onClickPgmSearchBtn = useCallback(() => {
    if (isLoadingPgm) return;
    dispatch({
      type: INIT_PROGRAMLIST_REQUEST
    });
    dispatch({
      type: GET_PROGRAMLIST_REQUEST,
      payload: {
        lastId: 0,
        limit: 20,
        searchKeyword: pgmSearchKeyword,
        startDate: moment(pgmStartDate).format("YYYY-MM-DD"),
        endDate: moment(pgmEndDate).format("YYYY-MM-DD")
      }
    });
    setPgmSort("createdAt,DESC");
  }, [isLoadingPgm, pgmSearchKeyword, pgmStartDate, pgmEndDate, dispatch]);
  // 스크롤 더보기
  const onScrollInPgmList = useCallback(
    (e) => {
      if (loadedProgram) {
        const { id: lastId } = loadedProgram[loadedProgram.length - 1];
        const { scrollHeight, clientHeight, scrollTop } = e.target;
        if (scrollHeight - scrollTop === clientHeight) {
          if (loadedProgram.length % 20 === 0) {
            dispatch({
              type: GET_PROGRAMLIST_REQUEST,
              payload: {
                lastId: lastId,
                limit: 20,
                searchKeyword: pgmSearchKeyword,
                startDate: moment(pgmStartDate).format("YYYY-MM-DD"),
                endDate: moment(pgmEndDate).format("YYYY-MM-DD"),
                sort: pgmSort
              }
            });
          }
        }
      }
    },
    [
      loadedProgram,
      pgmSearchKeyword,
      pgmStartDate,
      pgmEndDate,
      pgmSort,
      dispatch
    ]
  );

  return (
    <PublishPresentaion
      isLoadingPost={isLoadingPost}
      isLoadingPgm={isLoadingPgm}
      loadedPost={loadedPost}
      loadedProgram={loadedProgram}
      loadedChannel={loadedChannel}
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
      pgmChannel={pgmChannel}
      onChangePgmSearchKeyword={onChangePgmSearchKeyword}
      onChangePostSearchKeyword={onChangePostSearchKeyword}
      onChangePgmSort={onChangePgmSort}
      onChangePostSort={onChangePostSort}
      onChangePgmChannel={onChangePgmChannel}
      onClickSubMenuItem={onClickSubMenuItem}
      onClickAddPostBtn={onClickAddPostBtn}
      onClickAddProgramBtn={onClickAddProgramBtn}
      onKeyDownPgmSearchKeyword={onKeyDownPgmSearchKeyword}
      onClickPgmSearchBtn={onClickPgmSearchBtn}
      onScrollInPgmList={onScrollInPgmList}
    />
  );
};
export default PublishContainer;
