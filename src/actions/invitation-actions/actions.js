/*
@
 This file contains the actions creators
@
*/

import {
  POST_INVITATION_FAILURE,
  POST_INVITATION_REQUEST,
  POST_INVITATION_SUCCESS
} from "./types";

import InvitationsServices from "./service";
import { message } from "antd";

export function sendInvitation(body) {
  return async dispatch => {
    await dispatch({
      type: POST_INVITATION_REQUEST
    });
    try {
      await InvitationsServices.PostInvitationRequest(body);

      await dispatch({
        type: POST_INVITATION_SUCCESS
      });
      message.success("Your Invitation is sent! Thank you ");
    } catch (e) {
      await dispatch({
        type: POST_INVITATION_FAILURE
      });
      message.error("ups! There is an error try again please! ");
    }
  };
}
