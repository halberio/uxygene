import {
    FETCH_HOSTS_FAILURE,
    FETCH_HOSTS_REQUEST,
    FETCH_HOSTS_SUCCESS
} from "../actions/hosts-actions/types";

const intialState = {
    hosts: null,
    isLoadingHosts:false
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
        default:
            return state;
    }
};

export default hostsReducer;
