/*
@
 This file contains the actions creators
@
*/

import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS
} from "./types";

import UsersServices from "./service";

export function getUsers() {
  return async dispatch => {
    await dispatch({
      type: FETCH_USERS_REQUEST
    });
    try {
      const response = await UsersServices.fetchUsersRequest();
      await dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: {
          users: response.data.data
        }
      });
    } catch (e) {
      dispatch({
        type: FETCH_USERS_FAILURE
      });
    }
  };
}
