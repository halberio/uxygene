/*
@
 This file contains the actions creators
@
*/

import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  ADD_USER_VOTE_REQUEST,
  ADD_USER_VOTE_FAILURE,
  ADD_USER_VOTE_SUCCESS
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


export function addUserVote(id) {
  return async dispatch => {
    await dispatch({
      type: ADD_USER_VOTE_REQUEST
    });
    try {
      await UsersServices.addUserVoteRequest(id);
      await dispatch({
        type: ADD_USER_VOTE_SUCCESS
      });
    } catch (e) {
      dispatch({
        type: ADD_USER_VOTE_FAILURE
      });
    }
  };
}