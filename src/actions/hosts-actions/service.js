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

function fetchHostsWithFilterRequest(body) {
  const params = `?categories=${body}`;
  return axiosInstance({
    method: "get",
    url: `/hosts/filter${params}`,
    data: { ...body }
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
  addHostVoteRequest,
  fetchHostsWithFilterRequest
};

export default HostsServices;
