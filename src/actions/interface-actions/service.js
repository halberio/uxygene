/*
@
 This file contains the requests ( services )
@
*/

import axiosInstance from "../../config/axios-instance";

function interfaceServices() {
  return axiosInstance({
    method: "get",
    url: "/talents",
    data: null
  });
}

const InterfaceServices = {
  interfaceServices
};

export default InterfaceServices;
