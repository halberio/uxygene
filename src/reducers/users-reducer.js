import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS
} from "../actions/users-actions/types";

const intialState = {
    users: null,
    isLoading:false
};

const usersReducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                isLoading: false
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload.users,
                isLoading: false
            };
        default:
            return state;
    }
};

export default usersReducer;
