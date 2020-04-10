import { all, fork, takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE
} from "../reducers/post";
import { HIDE_ADDPOSTMODAL_REQUEST } from "../reducers/common";
import { axiosErrorHandle } from "../module/error";

function getListAPI({ lastId = 0, limit = 20 }) {
  return axios
    .get(`/post/list?lastId=${lastId}&limit=${limit}`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
function addItemAPI(payload) {
  const { title, description, tags, selectedFile } = payload;

  const formData = new FormData();
  formData.append("title", title);
  if (description) {
    formData.append("description", description);
  }
  if (tags.length > 0) {
    formData.append("tags", tags);
  }
  if (selectedFile) {
    formData.append("file", selectedFile);
  }

  return axios
    .post("/post/add", formData, {
      withCredentials: true
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
function* getList(action) {
  const { response, error } = yield call(getListAPI, action.payload);
  if (response) {
    yield put({
      type: GET_LIST_SUCCESS,
      payload: response.data
    });
  } else if (error) {
    const { message, type } = axiosErrorHandle(error);
    yield put({
      type: GET_LIST_FAILURE,
      payload: message
    });
    action.payload.toast({
      type,
      message
    });
  }
}
function* addItem(action) {
  const { response, error } = yield call(addItemAPI, action.payload);
  if (response) {
    yield put({
      type: ADD_ITEM_SUCCESS,
      payload: response.data
    });
    yield put({
      type: HIDE_ADDPOSTMODAL_REQUEST
    });
  } else if (error) {
    const { message, type } = axiosErrorHandle(error);
    yield put({
      type: ADD_ITEM_FAILURE,
      payload: message
    });
    action.payload.toast({
      type,
      message
    });
  }
}

// 목록 로드
function* watchGetList() {
  yield takeEvery(GET_LIST_REQUEST, getList);
}
// 등록
function* watchAddItem() {
  yield takeEvery(ADD_ITEM_REQUEST, addItem);
}
export default function* () {
  yield all([fork(watchGetList), fork(watchAddItem)]);
}
