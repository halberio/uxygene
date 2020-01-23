/*
@
 This file contains the actions creators
@
*/

import {
  FETCH_HOSTS_FAILURE,
  FETCH_HOSTS_REQUEST,
  FETCH_HOSTS_SUCCESS,
  ADD_HOST_VOTE_REQUEST,
  ADD_HOST_VOTE_FAILURE,
  ADD_HOST_VOTE_SUCCESS,
  CLEAR_HOSTS
} from "./types";

import HostsServices from "./service";
export function clearHosts() {
  return async dispatch => {
    await dispatch({
      type: CLEAR_HOSTS
    });
  };
}
export function getHosts() {
  return async dispatch => {
    await dispatch({
      type: FETCH_HOSTS_REQUEST
    });
    try {
      const response = await HostsServices.fetchHostsRequest();
      await dispatch({
        type: FETCH_HOSTS_SUCCESS,
        payload: {
          hosts: response.data.data
        }
      });
    } catch (e) {
      dispatch({
        type: FETCH_HOSTS_FAILURE
      });
    }
  };
}

export function getHostsWithFilter(categories) {
  return async dispatch => {
    await dispatch({
      type: FETCH_HOSTS_REQUEST
    });
    try {
      const response = await HostsServices.fetchHostsWithFilterRequest(
        categories
      );
      await dispatch({
        type: FETCH_HOSTS_SUCCESS,
        payload: {
          hosts: response.data
        }
      });
    } catch (e) {
      dispatch({
        type: FETCH_HOSTS_FAILURE
      });
    }
  };
}
export function hostVote(body) {
  return async dispatch => {
    await dispatch({
      type: ADD_HOST_VOTE_REQUEST
    });
    try {
      await HostsServices.addHostVoteRequest(body);
      await dispatch({
        type: ADD_HOST_VOTE_SUCCESS
      });
    } catch (e) {
      dispatch({
        type: ADD_HOST_VOTE_FAILURE
      });
    }
  };
}
