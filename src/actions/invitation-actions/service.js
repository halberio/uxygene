/*
@
 This file contains the requests ( services )
@
*/

import axiosInstance from "../../config/axios-instance";

function PostInvitationRequest(body) {
  return axiosInstance({
    method: "post",
    url: "/invitations",
    data: body
  });
}

const InvitationsServices = {
  PostInvitationRequest
};

export default InvitationsServices;
