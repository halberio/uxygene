/*
@
 This file contains the actions creators
@
*/

import {
  FETCH_EVENTS_FAILURE,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  SEARCH_EVENTS_ERROR,
  SEARCH_EVENTS_REQUEST,
  SEARCH_EVENTS_SUCCESS,
  CLEAR_EVENTS
} from "./types";

import EventsServices from "./service";

export function getEvents() {
  return async dispatch => {
    await dispatch({
      type: FETCH_EVENTS_REQUEST
    });
    try {
      const response = await EventsServices.fetchEventsRequest();
      await dispatch({
        type: FETCH_EVENTS_SUCCESS,
        payload: {
          events: response.data.data
        }
      });
    } catch (e) {
      dispatch({
        type: FETCH_EVENTS_FAILURE
      });
    }
  };
}

export function clearEvents() {
  return async dispatch => {
    await dispatch({
      type: CLEAR_EVENTS
    });
  };
}
export function searchEvents(keyword) {
  return async dispatch => {
    await dispatch({
      type: SEARCH_EVENTS_REQUEST
    });
    try {
      const response = await EventsServices.searchEventsRequest(keyword);
      await dispatch({
        type: SEARCH_EVENTS_SUCCESS,
        payload: {
          events: response.data
        }
      });
    } catch (e) {
      dispatch({
        type: SEARCH_EVENTS_ERROR
      });
    }
  };
}
