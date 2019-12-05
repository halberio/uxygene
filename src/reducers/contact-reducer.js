import {
  POST_CONTACT_FAILURE,
  POST_CONTACT_REQUEST,
  POST_CONTACT_SUCCESS
} from "../actions/contact-actions/types";

const intialState = {
  isSending: false
};

const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case POST_CONTACT_REQUEST:
      return {
        ...state,
        isSending: true
      };
    case POST_CONTACT_FAILURE:
      return {
        ...state,
        isSending: false
      };
    case POST_CONTACT_SUCCESS:
      return {
        ...state,
        isSending: false
      };
    default:
      return state;
  }
};

export default contactReducer;
