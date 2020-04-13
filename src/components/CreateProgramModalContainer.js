import React, { useCallback, useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateProgramModalPresentaion from "./CreateProgramModalPresentation";
import { HIDE_ADDPROGRAMMODAL_REQUEST } from "../reducers/common";
import {
  ADD_PROGRAMITEM_REQUEST,
  GET_DETAILGENRELIST_REQUEST
} from "../reducers/program";
import moment from "moment";

const CreateProgramModalContainer = () => {
  const dispatch = useDispatch();
  const {
    loadedGenre,
    loadedAgeGrade,
    loadedDetailGenre,
    loadedChannel,
    isGetDetailGernreListLoading
  } = useSelector((state) => state.program);

  const titleEl = useRef(null);
  const descriptionEl = useRef(null);
  const thumbnailEl = useRef(null);
  const prdtYearEl = useRef(null);
  const genreEl = useRef(null);
  const detailGenreEl = useRef(null);
  const ageGradeEl = useRef(null);
  const channelEl = useRef(null);

  const [title, setTitle] = useState(""); // 프로그램명
  const [description, setDescription] = useState(""); // 프로그램 내용
  const [thumbnail, setThumbnail] = useState(""); // 썸네일 미리보기
  const [selectedFile, setSelectedFile] = useState(null); // 썸네일 파일 데이터
  const [prdtYear, setPrdtYear] = useState(moment().format("YYYY")); // 제작 년도
  const [genre, setGenre] = useState(loadedGenre && loadedGenre[0].id); // 대표 장르
  const [detailGenre, setDetailGenre] = useState(""); // 세부 장르
  const [ageGrade, setAgeGrade] = useState(
    loadedAgeGrade && loadedAgeGrade[0].id
  ); // 연령 등급
  const [channel, setChannel] = useState(loadedChannel && loadedChannel[0].id); //채널

  // 모달 끄기
  const onHide = useCallback(() => {
    dispatch({
      type: HIDE_ADDPROGRAMMODAL_REQUEST
    });
  }, [dispatch]);

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onChangeDescription = useCallback((e) => {
    setDescription(e.target.value);
  }, []);

  const onChangeChannel = useCallback((e) => {
    setChannel(e.target.value);
  }, []);

  const onClickThumbnail = useCallback(() => {
    thumbnailEl.current.click();
  }, []);

  const onChangeThumbnail = useCallback((e) => {
    // 파일 선택창에서 취소 버튼을 누른 경우
    if (!e.target.value) return;
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setThumbnail(reader.result);
      setSelectedFile(file);
    };

    reader.readAsDataURL(file);
  }, []);

  const onChangePrdtYear = useCallback((e) => {
    setPrdtYear(e.target.value);
  }, []);

  const onChangeGenre = useCallback(
    (e) => {
      setGenre(e.target.value);
      dispatch({
        type: GET_DETAILGENRELIST_REQUEST,
        payload: {
          id: e.target.value
        }
      });
    },
    [dispatch]
  );

  const onChangeDetailGenre = useCallback((e) => {
    setDetailGenre(e.target.value);
  }, []);

  const onChangeAgeGrade = useCallback((e) => {
    setAgeGrade(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    if (!title) {
      alert("프로그램명을 입력하세요.");
      titleEl.current.focus();
      return;
    }
    if (title.length > 200) {
      alert("프로그램명은 200자 이내로 입력하세요.");
      titleEl.current.focus();
      return;
    }
    if (description && description.length > 500) {
      alert("내용은 500자 이내로 입력하세요.");
      descriptionEl.current.focus();
      return;
    }
    if (!selectedFile) {
      alert("썸네일을 등록해주세요.");
      return;
    }
    if (!prdtYear) {
      alert("제작년도를 선택하세요.");
      prdtYearEl.current.focus();
      return;
    }
    if (!genre) {
      alert("장르를 선택하세요.");
      genreEl.current.focus();
      return;
    }
    if (!detailGenre) {
      alert("세부장르를 선택하세요.");
      detailGenreEl.current.focus();
      return;
    }
    if (!ageGrade) {
      alert("연령등급을 선택하세요.");
      ageGradeEl.current.focus();
      return;
    }
    if (!channel) {
      alert("채널을 선택하세요.");
      channelEl.current.focus();
      return;
    }

    dispatch({
      type: ADD_PROGRAMITEM_REQUEST,
      payload: {
        title,
        description,
        selectedFile,
        prdtYear,
        genre,
        detailGenre,
        ageGrade,
        channel
      }
    });
  }, [
    title,
    description,
    selectedFile,
    prdtYear,
    genre,
    detailGenre,
    ageGrade,
    channel,
    dispatch
  ]);

  useEffect(() => {
    dispatch({
      type: GET_DETAILGENRELIST_REQUEST,
      payload: {
        id: loadedGenre && loadedGenre[0].id
      }
    });
  }, [dispatch, loadedGenre]);

  useEffect(() => {
    if (loadedDetailGenre) {
      setDetailGenre(loadedDetailGenre.DetailGenres[0].id);
    }
  }, [loadedDetailGenre]);

  return (
    <CreateProgramModalPresentaion
      title={title}
      titleEl={titleEl}
      description={description}
      descriptionEl={descriptionEl}
      thumbnail={thumbnail}
      thumbnailEl={thumbnailEl}
      prdtYear={prdtYear}
      prdtYearEl={prdtYearEl}
      genre={genre}
      genreEl={genreEl}
      detailGenre={detailGenre}
      detailGenreEl={detailGenreEl}
      ageGrade={ageGrade}
      ageGradeEl={ageGradeEl}
      channel={channel}
      channelEl={channelEl}
      loadedGenre={loadedGenre}
      loadedDetailGenre={loadedDetailGenre}
      loadedAgeGrade={loadedAgeGrade}
      loadedChannel={loadedChannel}
      onHide={onHide}
      onClickThumbnail={onClickThumbnail}
      onChangeTitle={onChangeTitle}
      onChangeDescription={onChangeDescription}
      onChangeThumbnail={onChangeThumbnail}
      onChangePrdtYear={onChangePrdtYear}
      onChangeGenre={onChangeGenre}
      onChangeDetailGenre={onChangeDetailGenre}
      onChangeAgeGrade={onChangeAgeGrade}
      onChangeChannel={onChangeChannel}
      onSubmit={onSubmit}
      isGetDetailGernreListLoading={isGetDetailGernreListLoading}
    />
  );
};
export default CreateProgramModalContainer;
