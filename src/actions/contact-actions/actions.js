/*
@
 This file contains the actions creators
@
*/

import {
  POST_CONTACT_FAILURE,
  POST_CONTACT_REQUEST,
  POST_CONTACT_SUCCESS
} from "./types";

import ContactServices from "./service";
import { message } from "antd";

export function sendContact(body) {
  return async dispatch => {
    await dispatch({
      type: POST_CONTACT_REQUEST
    });
    try {
      await ContactServices.PostContactRequest(body);
      await dispatch({
        type: POST_CONTACT_SUCCESS
      });
      message.success("Your Message is sent! Thank you ");
    } catch (e) {
      await dispatch({
        type: POST_CONTACT_FAILURE
      });
      message.error("ups! There is an error try again please! ");
    }
  };
}
