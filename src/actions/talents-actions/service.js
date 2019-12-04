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

function addTalentVoteRequest(body) {
  return axiosInstance({
    method: "post",
    url: "/votes",
    data: { ...body }
  });
}

const UsersServices = {
  fetchTalentsRequest,
  addTalentVoteRequest
};

export default UsersServices;
