import { all, fork, takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE
} from "../reducers/post";

function getListAPI({ lastId = 0, limit = 20 }) {
  return axios
    .get(`/post/list?lastId=${lastId}&limit=${limit}`)
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
    let message, type;
    if (error.request.response) {
      type = "error";
      message = JSON.parse(error.request.response).message;
    } else {
      type = "warn";
      message = "서버 점검 중입니다. 잠시후 시도하세요.";
    }
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

// 중복 확인
function* watchGetList() {
  yield takeEvery(GET_LIST_REQUEST, getList);
}
export default function* () {
  yield all([fork(watchGetList)]);
}
