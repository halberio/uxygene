/*
@
 This file contains the actions creators
@
*/

import {
  FETCH_HOSTS_FAILURE,
  FETCH_HOSTS_REQUEST,
  FETCH_HOSTS_SUCCESS
} from "./types";

import HostsServices from "./service";

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
