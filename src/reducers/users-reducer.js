import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,

    ADD_USER_VOTE_REQUEST,
    ADD_USER_VOTE_FAILURE,
    ADD_USER_VOTE_SUCCESS
} from "../actions/users-actions/types";

const intialState = {
    users: null,
    isLoadingUsers:false,
    isMakingUpdate:false
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

        case ADD_USER_VOTE_REQUEST:
            return {
                ...state,
                isMakingUpdate: true
            };
        case ADD_USER_VOTE_FAILURE:
            return {
                ...state,
                isMakingUpdate: false
            };
        case ADD_USER_VOTE_SUCCESS:
            return {
                ...state,
                isMakingUpdate: false
            };
        default:
            return state;
    }
};

export default usersReducer;
