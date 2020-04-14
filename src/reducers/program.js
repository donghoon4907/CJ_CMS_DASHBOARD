import produce from "immer";
// 목록 가져오기
export const GET_PROGRAMLIST_REQUEST = "GET_PROGRAMLIST_REQUEST";
export const GET_PROGRAMLIST_SUCCESS = "GET_PROGRAMLIST_SUCCESS";
export const GET_PROGRAMLIST_FAILURE = "GET_PROGRAMLIST_FAILURE";
// 등록
export const ADD_PROGRAMITEM_REQUEST = "ADD_PROGRAMITEM_REQUEST";
export const ADD_PROGRAMITEM_SUCCESS = "ADD_PROGRAMITEM_SUCCESS";
export const ADD_PROGRAMITEM_FAILURE = "ADD_PROGRAMITEM_FAILURE";
// 목록 초기화
export const INIT_PROGRAMLIST_REQUEST = "INIT_PROGRAMLIST_REQUEST";
// 장르 입수
export const GET_GENRELIST_REQUEST = "GET_GENRELIST_REQUEST";
export const GET_GENRELIST_SUCCESS = "GET_GENRELIST_SUCCESS";
export const GET_GENRELIST_FAILURE = "GET_GENRELIST_FAILURE";
// 세부 장르 입수
export const GET_DETAILGENRELIST_REQUEST = "GET_DETAILGENRELIST_REQUEST";
export const GET_DETAILGENRELIST_SUCCESS = "GET_DETAILGENRELIST_SUCCESS";
export const GET_DETAILGENRELIST_FAILURE = "GET_DETAILGENRELIST_FAILURE";
// 연령 등급 입수
export const GET_AGEGRADELIST_REQUEST = "GET_AGEGRADELIST_REQUEST";
export const GET_AGEGRADELIST_SUCCESS = "GET_AGEGRADELIST_SUCCESS";
export const GET_AGEGRADELIST_FAILURE = "GET_AGEGRADELIST_FAILURE";
// 채널 입수
export const GET_CHANNELLIST_REQUEST = "GET_CHANNELLIST_REQUEST";
export const GET_CHANNELLIST_SUCCESS = "GET_CHANNELLIST_SUCCESS";
export const GET_CHANNELLIST_FAILURE = "GET_CHANNELLIST_FAILURE";

export const initialState = {
  isGetListLoading: false, // 목록 가져오기 시도 중 여부
  isAddItemLoading: false, // 등록 시도 중 여부
  isGetGenreListLoading: false, // 장르 가져오기 시도 중 여부
  isGetDetailGernreListLoading: false, // 세부 장르 가져오기 시도 중 여부
  isAgeGradeListLoading: false, // 연령 등급 가져오기 시도 중 여부
  isChannelListLoading: false, // 채널 가져오기 시도 중 여부
  getListErrorReason: "", // 목록 가져오기 요청 오류 사유
  addItemErrorReason: "", // 등록 요청 오류 사유
  getGenreListErrorReason: "", // 장르 가져오기 요청 오류 사유
  getDetailGerneListErrorReason: "", // 세부 장르 가져오기 요청 오류 사유
  getAgeGradeListErrorReason: "", // 연령 등급 가져오기 요청 오류 사유
  getChannelListErrorReason: "", // 채널 가져오기 요청 오류 사유
  loadedProgram: null, // 가져온 목록 정보
  loadedGenre: null, // 가져온 장르 정보
  loadedDetailGenre: null, // 최근 가져온 세부장르 정보
  loadedAgeGrade: null, // 가져온 연령 등급 정보
  loadedChannel: null // 가져온 채널 등급 정보
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_PROGRAMLIST_REQUEST: {
        draft.isGetListLoading = true;
        break;
      }
      case GET_PROGRAMLIST_SUCCESS: {
        draft.isGetListLoading = false;
        if (draft.loadedProgram) {
          draft.loadedProgram = draft.loadedProgram.concat(action.payload);
        } else {
          draft.loadedProgram = action.payload;
        }
        break;
      }
      case GET_PROGRAMLIST_FAILURE: {
        draft.isGetListLoading = false;
        draft.getListErrorReason = action.payload;
        break;
      }
      case ADD_PROGRAMITEM_REQUEST: {
        draft.isAddItemLoading = true;
        break;
      }
      case ADD_PROGRAMITEM_SUCCESS: {
        draft.isAddItemLoading = false;
        break;
      }
      case ADD_PROGRAMITEM_FAILURE: {
        draft.isAddItemLoading = false;
        draft.addItemErrorReason = action.payload;
        break;
      }
      case INIT_PROGRAMLIST_REQUEST: {
        draft.loadedProgram = null;
        break;
      }
      case GET_GENRELIST_REQUEST: {
        draft.isGetGenreListLoading = true;
        break;
      }
      case GET_GENRELIST_SUCCESS: {
        draft.isGetGenreListLoading = false;
        draft.loadedGenre = action.payload;
        break;
      }
      case GET_GENRELIST_FAILURE: {
        draft.isGetGenreListLoading = false;
        draft.getGenreListErrorReason = action.payload;
        break;
      }
      case GET_DETAILGENRELIST_REQUEST: {
        draft.isGetDetailGernreListLoading = true;
        break;
      }
      case GET_DETAILGENRELIST_SUCCESS: {
        draft.isGetDetailGernreListLoading = false;
        draft.loadedDetailGenre = action.payload;
        break;
      }
      case GET_DETAILGENRELIST_FAILURE: {
        draft.isGetDetailGernreListLoading = false;
        draft.getDetailGenreListErrorReason = action.payload;
        break;
      }
      case GET_AGEGRADELIST_REQUEST: {
        draft.isAgeGradeListLoading = true;
        break;
      }
      case GET_AGEGRADELIST_SUCCESS: {
        draft.isAgeGradeListLoading = false;
        draft.loadedAgeGrade = action.payload;
        break;
      }
      case GET_AGEGRADELIST_FAILURE: {
        draft.isAgeGradeListLoading = false;
        draft.getAgeGradeListErrorReason = action.payload;
        break;
      }
      case GET_CHANNELLIST_REQUEST: {
        draft.isChannelListLoading = true;
        break;
      }
      case GET_CHANNELLIST_SUCCESS: {
        draft.isChannelListLoading = false;
        draft.loadedChannel = action.payload;
        break;
      }
      case GET_CHANNELLIST_FAILURE: {
        draft.isChannelListLoading = false;
        draft.getChannelListErrorReason = action.payload;
        break;
      }
      default:
        return state;
    }
  });
