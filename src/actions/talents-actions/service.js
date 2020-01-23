/*
@
 This file contains the requests ( services )
@
*/

import axiosInstance from "../../config/axios-instance";

function fetchTalentsRequest() {
  return axiosInstance({
    method: "get",
    url: "/talents",
    data: null
  });
}
function searchTalentsRequest(keyword) {
  let params = "/search-talents";
  if (keyword) {
    params = `/search-talents?name=${keyword}`;
  }
  return axiosInstance({
    method: "get",
    url: params,
    data: null
  });
}
function addTalentVoteRequest(body) {
  return axiosInstance({
    method: "post",
    url: "/votes",
    data: { ...body }
  });
}

function fetchTalentsWithFilterRequest(body) {
  const params = `?categories=${body}`;
  return axiosInstance({
    method: "get",
    url: `/talents/filter${params}`,
    data: { ...body }
  });
}

const UsersServices = {
  fetchTalentsRequest,
  addTalentVoteRequest,
  fetchTalentsWithFilterRequest,
  searchTalentsRequest
};

export default UsersServices;
