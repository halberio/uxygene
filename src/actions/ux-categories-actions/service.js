/*
@
 This file contains the requests ( services )
@
*/

import axiosInstance from "../../config/axios-instance";

function fetchUXCategoriesRequest() {
  return axiosInstance({
    method: "get",
    url: "/uxcategories",
    data: null
  });
}

const UXCategoriesServices = {
  fetchUXCategoriesRequest
};

export default UXCategoriesServices;
