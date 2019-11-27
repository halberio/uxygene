/*
@
 This file contains the requests ( services )
@
*/

import axiosInstance from "../../config/axios-instance";

function fetchHostsRequest() {
  return axiosInstance({
    method: "get",
    url: "/hosts",
    data: null
  });
}

function addHostVoteRequest(id) {
  return axiosInstance({
    method: "post",
    url: "/add-vote-host",
    data: {id:id}
  });
}

const HostsServices = {
  fetchHostsRequest,
  addHostVoteRequest
};

export default HostsServices;
