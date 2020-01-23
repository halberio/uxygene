import {
  FETCH_HOST_CATEGORIES_REQUEST,
  FETCH_HOST_CATEGORIES_FAILURE,
  FETCH_HOST_CATEGORIES_SUCCESS
} from "../actions/host-categories-actions/types";

const intialState = {
  host_categories: [],
  isLoadingHostsCategories: false,
  isMakingUpdate: false
};

const hostCategoriesReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_HOST_CATEGORIES_REQUEST:
      return {
        ...state,
        isLoadingHostsCategories: true
      };
    case FETCH_HOST_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoadingHostsCategories: false
      };
    case FETCH_HOST_CATEGORIES_SUCCESS:
      return {
        ...state,
        host_categories: action.payload.host_categories,
        isLoadingHostsCategories: false
      };
    default:
      return state;
  }
};

export default hostCategoriesReducer;
