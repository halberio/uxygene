import {
  FETCH_TALENTS_FAILURE,
  FETCH_TALENTS_REQUEST,
  FETCH_TALENTS_SUCCESS,
  ADD_TALENT_VOTE_REQUEST,
  ADD_TALENT_VOTE_FAILURE,
  ADD_TALENT_VOTE_SUCCESS,
  CLEAR_TALENTS,
  SEARCH_TALENTS_REQUEST,
  SEARCH_TALENTS_ERROR,
  SEARCH_TALENTS_SUCCESS
} from "../actions/talents-actions/types";

const intialState = {
  talents: [],
  isLoadingTalents: true,
  isMakingUpdate: false
};

const talentsReducer = (state = intialState, action) => {
  switch (action.type) {
    case CLEAR_TALENTS:
      return {
        ...state,
        talents: [],
        isLoadingTalents: true
      };
    //search start
    case SEARCH_TALENTS_REQUEST:
      return {
        ...state,
        isLoadingTalents: true
      };
    case SEARCH_TALENTS_ERROR:
      return {
        ...state,
        isLoadingTalents: false
      };
    case SEARCH_TALENTS_SUCCESS:
      return {
        ...state,
        talents: action.payload.talents,
        isLoadingTalents: false
      };
    //search end
    case FETCH_TALENTS_REQUEST:
      return {
        ...state,
        isLoadingTalents: true
      };
    case FETCH_TALENTS_FAILURE:
      return {
        ...state,
        isLoadingTalents: false
      };
    case FETCH_TALENTS_SUCCESS:
      return {
        ...state,
        talents: action.payload.talents,
        isLoadingTalents: false
      };

    case ADD_TALENT_VOTE_REQUEST:
      return {
        ...state,
        isMakingUpdate: true
      };
    case ADD_TALENT_VOTE_FAILURE:
      return {
        ...state,
        isMakingUpdate: false
      };
    case ADD_TALENT_VOTE_SUCCESS:
      return {
        ...state,
        isMakingUpdate: false
      };
    default:
      return state;
  }
};

export default talentsReducer;
