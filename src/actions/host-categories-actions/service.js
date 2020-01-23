/*
@
 This file contains the requests ( services )
@
*/

import axiosInstance from "../../config/axios-instance";

function fetchHostCategoriesRequest() {
  return axiosInstance({
    method: "get",
    url: "/hostcategories",
    data: null
  });
}

const HostCategoriesServices = {
  fetchHostCategoriesRequest
};

export default HostCategoriesServices;
