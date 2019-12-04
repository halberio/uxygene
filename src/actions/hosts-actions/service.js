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

function addHostVoteRequest(body) {
  return axiosInstance({
    method: "post",
    url: "/votes",
    data: { ...body }
  });
}

const HostsServices = {
  fetchHostsRequest,
  addHostVoteRequest
};

export default HostsServices;
