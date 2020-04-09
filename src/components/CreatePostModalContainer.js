import React, { useCallback, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreatePostModalPresentaion from "./CreatePostModalPresentation";
import { HIDE_ADDPOSTMODAL_REQUEST } from "../reducers/common";

const CreatePostModalContainer = () => {
  const dispatch = useDispatch();
  const { is_show_addpost_ui: isShow } = useSelector((state) => state.common);

  const thumbnailEl = useRef(null);

  const [tags, setTags] = useState([]);
  const [thumbnail, setThumbnail] = useState(""); // 미리보기
  const [selectedFile, setSelectedFile] = useState(null); // 파일 데이터

  const onHide = useCallback(() => {
    dispatch({
      type: HIDE_ADDPOSTMODAL_REQUEST
    });
  }, [dispatch]);

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

  return (
    <CreatePostModalPresentaion
      tags={tags}
      setTags={setTags}
      thumbnail={thumbnail}
      thumbnailEl={thumbnailEl}
      isShow={isShow}
      onHide={onHide}
      onClickThumbnail={onClickThumbnail}
      onChangeThumbnail={onChangeThumbnail}
    />
  );
};
export default CreatePostModalContainer;
