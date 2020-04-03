import { all, call } from "redux-saga/effects";
import axios from "axios";
import user from "./user";

axios.defaults.baseURL = "http://localhost:3001/api";

export default function*() {
  yield all([call(user)]);
}
