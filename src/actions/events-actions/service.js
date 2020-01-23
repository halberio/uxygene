/*
@
 This file contains the requests ( services )
@
*/

import axiosInstance from "../../config/axios-instance";

function fetchEventsRequest() {
  return axiosInstance({
    method: "get",
    url: "/events",
    data: null
  });
}
function searchEventsRequest(keyword) {
  let params = "/search-events";
  if (keyword) {
    params = `/search-events?name=${keyword}`;
  }
  return axiosInstance({
    method: "get",
    url: params,
    data: null
  });
}

const EventsServices = {
  fetchEventsRequest,
  searchEventsRequest
};

export default EventsServices;
