import { combineReducers } from "redux";
import common from "./common";
import user from "./user";
import post from "./post";
import program from "./program";

export default combineReducers({ common, user, post, program });

/**
 * Immer pattern
 *
 * 1. concat => single data: push / multiple datas: forEach and push
 * 2. filter => filter or splice
 */
