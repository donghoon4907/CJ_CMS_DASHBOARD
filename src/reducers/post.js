import produce from "immer";
// 목록 가져오기
export const GET_LIST_REQUEST = "GET_LIST_REQUEST";
export const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
export const GET_LIST_FAILURE = "GET_LIST_FAILURE";
// 목록 초기화
export const INIT_LIST_REQUEST = "INIT_LIST_REQUEST";

export const initialState = {
  isGetListLoading: false, // 목록 가져오기 시도 중 여부
  getListErrorReason: "", // 목록 가져오기 요청 오류 사유
  loadedPost: null // 가져온 목록 정보
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_LIST_REQUEST: {
        draft.isGetListLoading = true;
        break;
      }
      case GET_LIST_SUCCESS: {
        draft.isGetListLoading = false;
        draft.loadedPost = action.payload;
        break;
      }
      case GET_LIST_FAILURE: {
        draft.isGetListLoading = false;
        draft.getListErrorReason = action.payload;
        break;
      }
      case INIT_LIST_REQUEST: {
        draft.loadedPost = null;
        break;
      }
      default:
        return state;
    }
  });
