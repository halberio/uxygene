import {
  POST_INVITATION_FAILURE,
  POST_INVITATION_REQUEST,
  POST_INVITATION_SUCCESS
} from "../actions/invitation-actions/types";

const intialState = {
  isSending: false
};

const invitationsReducer = (state = intialState, action) => {
  switch (action.type) {
    case POST_INVITATION_REQUEST:
      return {
        ...state,
        isSending: true
      };
    case POST_INVITATION_FAILURE:
      return {
        ...state,
        isSending: false
      };
    case POST_INVITATION_SUCCESS:
      return {
        ...state,
        isSending: false
      };
    default:
      return state;
  }
};

export default invitationsReducer;
