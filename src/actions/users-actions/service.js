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


const UsersServices = {
  fetchUsersRequest
};

export default UsersServices;
