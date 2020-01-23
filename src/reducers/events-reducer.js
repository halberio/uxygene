import {
  FETCH_EVENTS_FAILURE,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  SEARCH_EVENTS_SUCCESS,
  SEARCH_EVENTS_REQUEST,
  SEARCH_EVENTS_ERROR,
  CLEAR_EVENTS
} from "../actions/events-actions/types";

const intialState = {
  events: [],
  isLoadingEvents: false
};

const eventsReducer = (state = intialState, action) => {
  switch (action.type) {
    case CLEAR_EVENTS:
      return {
        ...state,
        events: []
      };
    //start search
    case SEARCH_EVENTS_REQUEST:
      return {
        ...state,
        isLoadingEvents: true
      };
    case SEARCH_EVENTS_ERROR:
      return {
        ...state,
        isLoadingEvents: false
      };
    case SEARCH_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload.events,
        isLoadingEvents: false
      };
    //end Search
    case FETCH_EVENTS_REQUEST:
      return {
        ...state,
        isLoadingEvents: true
      };
    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        isLoadingEvents: false
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload.events,
        isLoadingEvents: false
      };
    default:
      return state;
  }
};

export default eventsReducer;
