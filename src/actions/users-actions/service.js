/*
@
 This file contains the requests ( services )
@
*/

import axiosInstance from "../../config/axios-instance";

function fetchUsersRequest() {
  return axiosInstance({
    method: "get",
    url: "/users",
    data: null
  });
}

function addUserVoteRequest(id) {
  return axiosInstance({
    method: "post",
    url: "/add-vote-user",
    data: {id:id}
  });
}


const UsersServices = {
  fetchUsersRequest,
  addUserVoteRequest
};

export default UsersServices;
