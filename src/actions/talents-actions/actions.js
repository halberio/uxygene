/*
@
 This file contains the actions creators
@
*/

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
} from "./types";

import TalentsServices from "./service";
export function clearTalents() {
  return async dispatch => {
    await dispatch({
      type: CLEAR_TALENTS
    });
  };
}

export function searchTalents(keyword) {
  return async dispatch => {
    await dispatch({
      type: SEARCH_TALENTS_REQUEST
    });
    try {
      const response = await TalentsServices.searchTalentsRequest(keyword);
      await dispatch({
        type: SEARCH_TALENTS_SUCCESS,
        payload: {
          talents: response.data
        }
      });
    } catch (e) {
      dispatch({
        type: SEARCH_TALENTS_ERROR
      });
    }
  };
}
export function getTalents() {
  return async dispatch => {
    await dispatch({
      type: FETCH_TALENTS_REQUEST
    });
    try {
      const response = await TalentsServices.fetchTalentsRequest();

      await dispatch({
        type: FETCH_TALENTS_SUCCESS,
        payload: {
          talents: response.data.data
        }
      });
    } catch (e) {
      dispatch({
        type: FETCH_TALENTS_FAILURE
      });
    }
  };
}

export function getTalentsWithFilter(categories) {
  return async dispatch => {
    await dispatch({
      type: FETCH_TALENTS_REQUEST
    });
    try {
      const response = await TalentsServices.fetchTalentsWithFilterRequest(
        categories
      );

      await dispatch({
        type: FETCH_TALENTS_SUCCESS,
        payload: {
          talents: response.data
        }
      });
    } catch (e) {
      dispatch({
        type: FETCH_TALENTS_FAILURE
      });
    }
  };
}

export function talentVote(body) {
  return async dispatch => {
    await dispatch({
      type: ADD_TALENT_VOTE_REQUEST
    });
    try {
      await TalentsServices.addTalentVoteRequest(body);
      await dispatch({
        type: ADD_TALENT_VOTE_SUCCESS
      });
    } catch (e) {
      dispatch({
        type: ADD_TALENT_VOTE_FAILURE
      });
    }
  };
}
