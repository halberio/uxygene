/*
@
 This file contains the actions creators
@
*/

import {
  FETCH_HOST_CATEGORIES_REQUEST,
  FETCH_HOST_CATEGORIES_FAILURE,
  FETCH_HOST_CATEGORIES_SUCCESS
} from "./types";

import HostCategoriesServices from "./service";

export function getHostsCategories() {
  return async dispatch => {
    await dispatch({
      type: FETCH_HOST_CATEGORIES_REQUEST
    });
    try {
      const response = await HostCategoriesServices.fetchHostCategoriesRequest();
      await dispatch({
        type: FETCH_HOST_CATEGORIES_SUCCESS,
        payload: {
          host_categories: response.data
        }
      });
    } catch (e) {
      dispatch({
        type: FETCH_HOST_CATEGORIES_FAILURE
      });
    }
  };
}
