/*
@
 This file contains the actions creators
@
*/

import {
  FETCH_UX_CATEGORIES_REQUEST,
  FETCH_UX_CATEGORIES_FAILURE,
  FETCH_UX_CATEGORIES_SUCCESS
} from "./types";

import UXCategoriesServices from "./service";

export function getUxCategories() {
  return async dispatch => {
    await dispatch({
      type: FETCH_UX_CATEGORIES_REQUEST
    });
    try {
      const response = await UXCategoriesServices.fetchUXCategoriesRequest();
      await dispatch({
        type: FETCH_UX_CATEGORIES_SUCCESS,
        payload: {
          ux_categories: response.data
        }
      });
    } catch (e) {
      dispatch({
        type: FETCH_UX_CATEGORIES_FAILURE
      });
    }
  };
}
