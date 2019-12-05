/*
@
 This file contains the requests ( services )
@
*/

import axiosInstance from "../../config/axios-instance";

function PostContactRequest(body) {
  return axiosInstance({
    method: "post",
    url: "/contacts",
    data: body
  });
}

const ContactServices = {
  PostContactRequest
};

export default ContactServices;
