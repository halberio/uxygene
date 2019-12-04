import {
  SHOW_RIGHT_MODAL_START,
  HIDE_RIGHT_MODAL_DONE,
  SHOW_RIGHT_MODAL_DONE,
  HIDE_RIGHT_MODAL_START,
  SHOW_RIGHT_MODAL_FAILURE
} from "../actions/interface-actions/types";

const intialState = {
  modalRightVisible: false,
  title: "HEY you!",
  subTitle: "Thank you for choosing uxyègene!",
  content: "Enjoy using our platform"
};

const interfaceReducer = (state = intialState, action) => {
  switch (action.type) {
    case SHOW_RIGHT_MODAL_START:
      return {
        ...state,
        title: action.payload.title,
        subTitle: action.payload.subTitle,
        content: action.payload.content
      };
    case SHOW_RIGHT_MODAL_DONE:
      return {
        ...state,
        modalRightVisible: true
      };
    case HIDE_RIGHT_MODAL_START:
      return {
        ...state
      };
    case HIDE_RIGHT_MODAL_DONE:
      return {
        ...state,
        modalRightVisible: false
      };
    case SHOW_RIGHT_MODAL_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default interfaceReducer;
