import React, { useCallback, useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SetContentModalPresentaion from "./SetContentModalPresentation";
import {
  HIDE_ADDCONTENTMODAL,
  HIDE_UPDATECONTENTMODAL
} from "../reducers/common";
import {
  ADD_CONTENTITEM_REQUEST,
  UPDATE_CONTENTITEM_REQUEST,
  INACTIVE_CONTENTITEM
} from "../reducers/program";
import moment from "moment";

const SetContentModalContainer = () => {
  const dispatch = useDispatch();
  const { activeContent } = useSelector((state) => state.content); // 선택된 프로그램 ( 수정 여부 판단 )}

  const pgmEl = useRef(null);
  const descriptionEl = useRef(null);
  const broadcastDateEl = useRef(null);

  const [type, setType] = useState("등록");
  const [pgm, setPgm] = useState(""); // 프로그램명
  const [description, setDescription] = useState(""); // 컨텐츠 내용
  const [cast, setCast] = useState([]); // 출연진
  const [broadcastDate, setBroadcastDate] = useState(
    moment().format("YYYY-MM-DD HH:mm:ss")
  ); // 방송일
  const [video, setVideo] = useState(""); // 영상 미리보기
  const [selectedFile, setSelectedFile] = useState(null); // 영상 파일 데이터

  // 모달 끄기
  const onHide = useCallback(() => {
    dispatch({
      type: HIDE_ADDCONTENTMODAL
    });
    dispatch({
      type: HIDE_UPDATECONTENTMODAL
    });
    dispatch({
      type: INACTIVE_CONTENTITEM
    });
  }, [dispatch]);

  const onChangePgm = useCallback((e) => {
    setPgm(e.target.value);
  }, []);

  const onChangeDescription = useCallback((e) => {
    setDescription(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    dispatch({
      type: activeContent
        ? UPDATE_CONTENTITEM_REQUEST
        : ADD_CONTENTITEM_REQUEST,
      payload: {
        id: activeContent ? activeContent.id : null
      }
    });
  }, [dispatch]);
  // 수정 시 기본 값 설정
  useEffect(() => {
    if (activeContent) {
      const { description } = activeContent;
      setType("수정");
      setDescription(description);
    }
  }, [activeContent, dispatch]);
  return (
    <SetContentModalPresentaion
      type={type}
      pgm={pgm}
      pgmEl={pgmEl}
      description={description}
      descriptionEl={descriptionEl}
      broadcastDate={broadcastDate}
      broadcastDateEl={broadcastDateEl}
      setBroadcastDate={setBroadcastDate}
      onHide={onHide}
      onChangePgm={onChangePgm}
      onChangeDescription={onChangeDescription}
      onSubmit={onSubmit}
    />
  );
};
export default SetContentModalContainer;
