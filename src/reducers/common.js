import produce from "immer";
// 로그인 화면 보이기
export const SHOW_LOGINLAYER = "SHOW_LOGINLAYER";
// 대쉬보드 화면 보이기
export const SHOW_DASHBOARD = "SHOW_DASHBOARD";
// 회원가입 화면 보이기
export const SHOW_SIGNUPLAYER = "SHOW_SIGNUPLAYER";
// 포스트 추가 모달 보이기
export const SHOW_ADDPOSTMODAL = "SHOW_ADDPOSTMODAL";
// 포스트 추가 모달 숨기기
export const HIDE_ADDPOSTMODAL = "HIDE_ADDPOSTMODAL";
// 포스트 수정 모달 보이기
export const SHOW_UPDATEPOSTMODAL = "SHOW_UPDATEPOSTMODAL";
// 포스트 수정 모달 숨기기
export const HIDE_UPDATEPOSTMODAL = "HIDE_UPDATEPOSTMODAL";
// 프로그램 추가 모달 보이기
export const SHOW_ADDPROGRAMMODAL = "SHOW_ADDPROGRAMMODAL";
// 프로그램 추가 모달 숨기기
export const HIDE_ADDPROGRAMMODAL = "HIDE_ADDPROGRAMMODAL";
// 프로그램 수정 모달 보이기
export const SHOW_UPDATEPROGRAMMODAL = "SHOW_UPDATEPROGRAMMODAL";
// 프로그램 수정 모달 숨기기
export const HIDE_UPDATEPROGRAMMODAL = "HIDE_UPDATEPROGRAMMODAL";

export const initialState = {
  isShowLoginUi: false, // 로그인 화면 보이기 유무
  isShowSignUpUi: false, // 회원가입 화면 보이기 유무
  isShowAddPostUi: false, // 포스트 추가 화면 보이기 유무
  isShowUpdatePostUi: false, // 포스트 수정 화면 보이기 유무
  isShowAddPgmUi: false, // 프로그램 추가 화면 보이기 유무
  isShowUpdatePgmUi: false // 프로그램 수정 화면 보이기 유무
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SHOW_LOGINLAYER: {
        draft.isShowLoginUi = true;
        draft.isShowSignUpUi = false;
        break;
      }
      case SHOW_SIGNUPLAYER: {
        draft.isShowLoginUi = false;
        draft.isShowSignUpUi = true;
        break;
      }
      case SHOW_DASHBOARD: {
        draft.isShowLoginUi = false;
        draft.isShowSignUpUi = false;
        break;
      }
      case SHOW_ADDPOSTMODAL: {
        draft.isShowAddPostUi = true;
        break;
      }
      case HIDE_ADDPOSTMODAL: {
        draft.isShowUpdatePostUi = false;
        break;
      }
      case SHOW_UPDATEPOSTMODAL: {
        draft.isShowUpdatePostUi = true;
        break;
      }
      case HIDE_UPDATEPOSTMODAL: {
        draft.isShowAddPostUi = false;
        break;
      }
      case SHOW_ADDPROGRAMMODAL: {
        draft.isShowAddPgmUi = true;
        break;
      }
      case HIDE_ADDPROGRAMMODAL: {
        draft.isShowAddPgmUi = false;
        break;
      }
      case SHOW_UPDATEPROGRAMMODAL: {
        draft.isShowUpdatePgmUi = true;
        break;
      }
      case HIDE_UPDATEPROGRAMMODAL: {
        draft.isShowUpdatePgmUi = false;
        break;
      }
      default:
        return state;
    }
  });
