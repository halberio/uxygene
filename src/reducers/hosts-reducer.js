import {
    FETCH_HOSTS_FAILURE,
    FETCH_HOSTS_REQUEST,
    FETCH_HOSTS_SUCCESS,
    ADD_HOST_VOTE_REQUEST,
    ADD_HOST_VOTE_FAILURE,
    ADD_HOST_VOTE_SUCCESS
} from "../actions/hosts-actions/types";

const intialState = {
    hosts: null,
    isLoadingHosts:false,
    isUpdating:false
};

const hostsReducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_HOSTS_REQUEST:
            return {
                ...state,
                isLoadingHosts: true
            };
        case FETCH_HOSTS_FAILURE:
            return {
                ...state,
                isLoadingHosts: false
            };
        case FETCH_HOSTS_SUCCESS:
            return {
                ...state,
                hosts: action.payload.hosts,
                isLoadingHosts: false
            };
        case ADD_HOST_VOTE_REQUEST:
            return {
                ...state,
                isUpdating: true
            };
        case ADD_HOST_VOTE_FAILURE:
            return {
                ...state,
                isUpdating: false
            };
        case ADD_HOST_VOTE_SUCCESS:
            return {
                ...state,
                isUpdating: false
            };
        default:
            return state;
    }
};

export default hostsReducer;
