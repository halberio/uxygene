/*
@
 This file contains the actions creators
@
*/

import {
  SHOW_RIGHT_MODAL_START,
  HIDE_RIGHT_MODAL_DONE,
  SHOW_RIGHT_MODAL_DONE,
  HIDE_RIGHT_MODAL_START,
  SHOW_RIGHT_MODAL_FAILURE
} from "./types";

export function showModalRight(body) {
  return async dispatch => {
    await dispatch({
      type: SHOW_RIGHT_MODAL_START,
      payload: body
    });
    try {
      dispatch({
        type: SHOW_RIGHT_MODAL_DONE
      });
    } catch (e) {
      dispatch({
        type: SHOW_RIGHT_MODAL_FAILURE
      });
    }
  };
}

export function hideModalRight() {
  return async dispatch => {
    await dispatch({
      type: HIDE_RIGHT_MODAL_START
    });
    try {
      dispatch({
        type: HIDE_RIGHT_MODAL_DONE
      });
    } catch (e) {}
  };
}
