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


const EventsServices = {
  fetchEventsRequest
};

export default EventsServices;
