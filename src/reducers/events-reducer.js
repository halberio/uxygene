import {
    FETCH_EVENTS_FAILURE,
    FETCH_EVENTS_REQUEST,
    FETCH_EVENTS_SUCCESS
} from "../actions/events-actions/types";

const intialState = {
    events: null,
    isLoadingEvents:false
};

const eventsReducer = (state = intialState, action) => {
    switch (action.type) {
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
