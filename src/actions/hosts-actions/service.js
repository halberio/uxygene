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


const HostsServices = {
  fetchHostsRequest
};

export default HostsServices;
