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
  ADD_TALENT_VOTE_SUCCESS
} from "./types";

import TalentsServices from "./service";

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

export function addTalentVote(id) {
  return async dispatch => {
    await dispatch({
      type: ADD_TALENT_VOTE_REQUEST
    });
    try {
      await TalentsServices.addTalentVoteRequest(id);
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
