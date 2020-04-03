import { combineReducers } from "redux";
import common from "./common";
import user from "./user";

export default combineReducers({ common, user });

/**
 * Immer pattern
 *
 * 1. concat => single data: push / multiple datas: forEach and push
 * 2. filter => filter or splice
 */
