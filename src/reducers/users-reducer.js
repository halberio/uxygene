import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS
} from "../actions/users-actions/types";

const intialState = {
    users: null,
    isLoadingUsers:false
};

const usersReducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoadingUsers: true
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                isLoadingUsers: false
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload.users,
                isLoadingUsers: false
            };
        default:
            return state;
    }
};

export default usersReducer;
