/*
@
 This file contains the actions creators
@
*/

import {
  FETCH_EVENTS_FAILURE,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS
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
