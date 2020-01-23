import {
  FETCH_UX_CATEGORIES_REQUEST,
  FETCH_UX_CATEGORIES_FAILURE,
  FETCH_UX_CATEGORIES_SUCCESS
} from "../actions/ux-categories-actions/types";

const intialState = {
  ux_categories: [],
  isLoadingUXCategories: false,
  isMakingUpdate: false
};

const uxCategoriesReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_UX_CATEGORIES_REQUEST:
      return {
        ...state,
        isLoadingUXCategories: true
      };
    case FETCH_UX_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoadingUXCategories: false
      };
    case FETCH_UX_CATEGORIES_SUCCESS:
      return {
        ...state,
        ux_categories: action.payload.ux_categories,
        isLoadingUXCategories: false
      };
    default:
      return state;
  }
};

export default uxCategoriesReducer;
