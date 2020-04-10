import React, { useCallback, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreatePostModalPresentaion from "./CreatePostModalPresentation";
import { HIDE_ADDPOSTMODAL_REQUEST } from "../reducers/common";
import { ADD_ITEM_REQUEST } from "../reducers/post";
import { showToast } from "../module/toast";

const CreatePostModalContainer = () => {
  const dispatch = useDispatch();
  const { is_show_addpost_ui: isShow } = useSelector((state) => state.common);

  const titleEl = useRef(null);
  const descriptionEl = useRef(null);
  const thumbnailEl = useRef(null);

  const [title, setTitle] = useState(""); // 제목
  const [description, setDescription] = useState(""); // 내용
  const [tags, setTags] = useState([]); // 태그
  const [thumbnail, setThumbnail] = useState(""); // 미리보기
  const [selectedFile, setSelectedFile] = useState(null); // 파일 데이터

  // 모달 끄기
  const onHide = useCallback(() => {
    dispatch({
      type: HIDE_ADDPOSTMODAL_REQUEST
    });
  }, [dispatch]);

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onChangeDescription = useCallback((e) => {
    setDescription(e.target.value);
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

  const onSubmit = useCallback(() => {
    if (!title) {
      alert("제목을 입력하세요.");
      titleEl.current.focus();
      return;
    }
    if (title.length > 200) {
      alert("제목은 200자 이내로 입력하세요.");
      titleEl.current.focus();
      return;
    }
    if (description && description.length > 500) {
      alert("내용은 500자 이내로 입력하세요.");
      descriptionEl.current.focus();
      return;
    }
    dispatch({
      type: ADD_ITEM_REQUEST,
      payload: {
        title,
        description,
        tags,
        selectedFile,
        toast: ({ type, message }) => showToast({ type, message })
      }
    });
  }, [title, description, tags, selectedFile, dispatch]);

  return (
    <CreatePostModalPresentaion
      title={title}
      titleEl={titleEl}
      description={description}
      descriptionEl={descriptionEl}
      tags={tags}
      setTags={setTags}
      thumbnail={thumbnail}
      thumbnailEl={thumbnailEl}
      isShow={isShow}
      onHide={onHide}
      onClickThumbnail={onClickThumbnail}
      onChangeTitle={onChangeTitle}
      onChangeDescription={onChangeDescription}
      onChangeThumbnail={onChangeThumbnail}
      onSubmit={onSubmit}
    />
  );
};
export default CreatePostModalContainer;
