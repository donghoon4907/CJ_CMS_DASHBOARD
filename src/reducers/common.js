import produce from "immer";
// 로그인 화면 보이기
export const SHOW_LOGINLAYER_REQUEST = "SHOW_LOGINLAYER_REQUEST";
// 대쉬보드 화면 보이기
export const SHOW_DASHBOARD_REQUEST = "SHOW_DASHBOARD_REQUEST";
// 회원가입 화면 보이기
export const SHOW_SIGNUPLAYER_REQUEST = "SHOW_SIGNUPLAYER_REQUEST";
// 포스트 추가 모달 보이기
export const SHOW_ADDPOSTMODAL_REQUEST = "SHOW_ADDPOSTMODAL_REQUEST";
// 포스트 추가 모달 숨기기
export const HIDE_ADDPOSTMODAL_REQUEST = "HIDE_ADDPOSTMODAL_REQUEST";

export const initialState = {
  is_show_login_ui: true, // 로그인 화면 보이기 유무
  is_show_signup_ui: false, // 회원가입 화면 보이기 유무
  is_show_addpost_ui: false // 포스트 추가 화면 보이기 유무
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SHOW_LOGINLAYER_REQUEST: {
        draft.is_show_login_ui = true;
        draft.is_show_signup_ui = false;
        break;
      }
      case SHOW_SIGNUPLAYER_REQUEST: {
        draft.is_show_login_ui = false;
        draft.is_show_signup_ui = true;
        break;
      }
      case SHOW_DASHBOARD_REQUEST: {
        draft.is_show_login_ui = false;
        draft.is_show_signup_ui = false;
        break;
      }
      case SHOW_ADDPOSTMODAL_REQUEST: {
        draft.is_show_addpost_ui = true;
        break;
      }
      case HIDE_ADDPOSTMODAL_REQUEST: {
        draft.is_show_addpost_ui = false;
        break;
      }
      default:
        return state;
    }
  });
