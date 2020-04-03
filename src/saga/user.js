import { all, fork, takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  DOUBLE_CHECK_REQUEST,
  DOUBLE_CHECK_SUCCESS,
  DOUBLE_CHECK_FAILURE,
  CHECK_EMAIL_REQUEST,
  CHECK_EMAIL_SUCCESS,
  CHECK_EMAIL_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE
} from "../reducers/user";
import { SHOW_LOGINLAYER_REQUEST } from "../reducers/common";

function dbcheckAPI(payload) {
  return axios
    .post("/user/check", payload)
    .then(response => ({ response }))
    .catch(error => ({ error }));
}
function checkEmailAPI(payload) {
  return axios
    .post("/user/email", payload)
    .then(response => ({ response }))
    .catch(error => ({ error }));
}
function signUpAPI(payload) {
  return axios
    .post("/user/add", payload)
    .then(response => ({ response }))
    .catch(error => ({ error }));
}
function logInAPI(payload) {
  return axios
    .post("/user/login", payload, {
      withCredentials: true
    })
    .then(response => ({ response }))
    .catch(error => ({ error }));
}
function logOutAPI() {
  return axios.post(
    "/user/logout",
    {},
    {
      withCredentials: true
    }
  );
}
function* dbcheck(action) {
  const { response, error } = yield call(dbcheckAPI, action.payload);
  if (response) {
    yield put({
      type: DOUBLE_CHECK_SUCCESS,
      payload: action.payload.id
    });
    alert(response.data.message);
  } else if (error) {
    const { message } = JSON.parse(error.request.response);
    yield put({
      type: DOUBLE_CHECK_FAILURE,
      payload: message
    });
    alert(message);
  }
}
function* emailCheck(action) {
  const { response, error } = yield call(checkEmailAPI, action.payload);
  if (response) {
    const { token, message } = response.data;
    yield put({
      type: CHECK_EMAIL_SUCCESS,
      payload: token
    });
    alert(message);
  } else if (error) {
    const { message } = JSON.parse(error.request.response);
    yield put({
      type: CHECK_EMAIL_FAILURE,
      payload: message
    });
    alert(message);
  }
}
function* signUp(action) {
  const { response, error } = yield call(signUpAPI, action.payload);
  if (response) {
    yield put({
      type: SIGN_UP_SUCCESS
    });
    alert(response.data.message);
    yield put({
      type: SHOW_LOGINLAYER_REQUEST
    });
  } else if (error) {
    const { message } = JSON.parse(error.request.response);
    yield put({
      type: SIGN_UP_FAILURE,
      payload: message
    });
    alert(message);
  }
}
function* logIn(action) {
  const { response, error } = yield call(logInAPI, action.payload);
  if (response) {
    console.log(response);
    return;
    // yield put({
    //   type: LOG_IN_SUCCESS,
    //   payload: response.data
    // });
  } else if (error) {
    const { message } = JSON.parse(error.request.response);
    yield put({
      type: LOG_IN_FAILURE,
      payload: message
    });
    alert(message);
  }
}
function* logOut() {
  const { response, error } = yield call(logOutAPI);
  if (response) {
    yield put({
      type: LOG_OUT_SUCCESS
    });
  } else if (error) {
    const { message } = JSON.parse(error.request.response);
    yield put({
      type: LOG_OUT_FAILURE,
      payload: message
    });
    alert(message);
  }
}
// 중복 확인
function* watchDbCheck() {
  yield takeEvery(DOUBLE_CHECK_REQUEST, dbcheck);
}
// 이메일 체크
function* watchCheckEmail() {
  yield takeEvery(CHECK_EMAIL_REQUEST, emailCheck);
}
//로그인
function* watchLogIn() {
  yield takeEvery(LOG_IN_REQUEST, logIn);
}
// 회원가입
function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}
// 로그아웃
function* watchLogOut() {
  yield takeEvery(LOG_OUT_REQUEST, logOut);
}
export default function*() {
  yield all([
    fork(watchDbCheck),
    fork(watchCheckEmail),
    fork(watchSignUp),
    fork(watchLogIn),
    fork(watchLogOut)
  ]);
}
