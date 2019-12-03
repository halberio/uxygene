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

function addTalentVoteRequest(id) {
  return axiosInstance({
    method: "post",
    url: "/add-vote-user",
    data: { id: id }
  });
}

const UsersServices = {
  fetchTalentsRequest,
  addTalentVoteRequest
};

export default UsersServices;
