import { all, fork, takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  INACTIVE_CONTENTITEM,
  GET_CONTENTLIST_REQUEST,
  GET_CONTENTLIST_SUCCESS,
  GET_CONTENTLIST_FAILURE,
  ADD_CONTENTITEM_REQUEST,
  ADD_CONTENTITEM_SUCCESS,
  ADD_CONTENTITEM_FAILURE,
  UPDATE_CONTENTITEM_REQUEST,
  UPDATE_CONTENTITEM_SUCCESS,
  UPDATE_CONTENTITEM_FAILURE
} from "../reducers/content";
import {
  SHOW_LOGINLAYER,
  HIDE_ADDCONTENTMODAL,
  HIDE_UPDATECONTENTMODAL
} from "../reducers/common";
import { LOG_OUT_SUCCESS } from "../reducers/user";
import { axiosErrorHandle } from "../module/error";
import { showToast } from "../module/toast";
import { makeListQuery } from "../module/query";

function getListAPI(payload) {
  return axios
    .get(makeListQuery({ type: "content", ...payload }))
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
function addItemAPI(payload) {
  const {
    title,
    description,
    selectedFile,
    prdtYear,
    genre,
    detailGenre,
    ageGrade,
    channel
  } = payload;

  const formData = new FormData();
  formData.append("title", title);
  formData.append("product_year", prdtYear);
  formData.append("genre", genre);
  formData.append("detailgenre", detailGenre);
  formData.append("agegrade", ageGrade);
  formData.append("channel", channel);
  if (description) {
    formData.append("description", description);
  }
  if (selectedFile) {
    formData.append("file", selectedFile);
  }

  return axios
    .post("/content/add", formData, {
      withCredentials: true
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
function updateItemAPI(payload) {
  const {
    id,
    title,
    description,
    selectedFile,
    prdtYear,
    genre,
    detailGenre,
    ageGrade,
    channel
  } = payload;

  const formData = new FormData();
  formData.append("title", title);
  formData.append("product_year", prdtYear);
  formData.append("genre", genre);
  formData.append("detailgenre", detailGenre);
  formData.append("agegrade", ageGrade);
  formData.append("channel", channel);
  if (id) {
    formData.append("id", id);
  }
  if (description) {
    formData.append("description", description);
  }
  if (selectedFile) {
    formData.append("file", selectedFile);
  }

  return axios
    .put("/program/update", formData, {
      withCredentials: true
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
function* getList(action) {
  const { response, error } = yield call(getListAPI, action.payload);
  if (response) {
    yield put({
      type: GET_CONTENTLIST_SUCCESS,
      payload: response.data
    });
  } else if (error) {
    const { message, type } = axiosErrorHandle(error);
    yield put({
      type: GET_CONTENTLIST_FAILURE,
      payload: message
    });
    showToast({
      type,
      message
    });
  }
}
function* addItem(action) {
  const { response, error } = yield call(addItemAPI, action.payload);
  if (response) {
    yield put({
      type: ADD_CONTENTITEM_SUCCESS
    });
    showToast({
      type: "success",
      message: response.data.message
    });
    yield put({
      type: HIDE_ADDCONTENTMODAL
    });
  } else if (error) {
    const { message, type, isExpired } = axiosErrorHandle(error);
    if (isExpired) {
      yield put({
        type: LOG_OUT_SUCCESS
      });
      yield put({
        type: HIDE_ADDCONTENTMODAL
      });
      yield put({
        type: SHOW_LOGINLAYER
      });
    } else {
      yield put({
        type: ADD_CONTENTITEM_FAILURE,
        payload: message
      });
    }
    showToast({
      type,
      message
    });
  }
}
function* updateItem(action) {
  const { response, error } = yield call(updateItemAPI, action.payload);
  if (response) {
    yield put({
      type: UPDATE_CONTENTITEM_SUCCESS,
      payload: response.data.data
    });
    showToast({
      type: "success",
      message: response.data.message
    });
    yield put({
      type: INACTIVE_CONTENTITEM
    });
    yield put({
      type: HIDE_UPDATECONTENTMODAL
    });
  } else if (error) {
    const { message, type, isExpired } = axiosErrorHandle(error);
    if (isExpired) {
      yield put({
        type: LOG_OUT_SUCCESS
      });
      yield put({
        type: HIDE_UPDATECONTENTMODAL
      });
      yield put({
        type: SHOW_LOGINLAYER
      });
    } else {
      yield put({
        type: UPDATE_CONTENTITEM_FAILURE,
        payload: message
      });
    }
    showToast({
      type,
      message
    });
  }
}

// 목록 로드
function* watchGetList() {
  yield takeEvery(GET_CONTENTLIST_REQUEST, getList);
}
// 등록
function* watchAddItem() {
  yield takeEvery(ADD_CONTENTITEM_REQUEST, addItem);
}
// 수정
function* watchUpdateItem() {
  yield takeEvery(UPDATE_CONTENTITEM_REQUEST, updateItem);
}
export default function* () {
  yield all([fork(watchGetList), fork(watchAddItem), fork(watchUpdateItem)]);
}
