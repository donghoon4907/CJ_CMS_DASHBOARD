import produce from "immer";

export const SHOW_LOGINLAYER_REQUEST = "SHOW_LOGINLAYER_REQUEST";

export const SHOW_DASHBOARD_REQUEST = "SHOW_DASHBOARD_REQUEST";

export const SHOW_SIGNUPLAYER_REQUEST = "SHOW_SIGNUPLAYER_REQUEST";

export const initialState = {
  is_show_login_ui: true,
  is_show_signup_ui: false
};

export default (state = initialState, action) =>
  produce(state, draft => {
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
      default:
        return state;
    }
  });
