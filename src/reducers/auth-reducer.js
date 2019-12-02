import {
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGOUT_REQUEST,
  DISCONNECT_THE_USER,
  CONNECT_THE_USER,
  GET_AUTH_REQUEST,
  GET_AUTH_SUCCESS,
  GET_AUTH_FAILURE,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  SIGNIN_FACEBOOK_REQUEST,
  SIGNIN_FACEBOOK_FAILURE,
  SIGNIN_FACEBOOK_SUCCESS,
  SIGNIN_GOOGLE_REQUEST,
  SIGNIN_GOOGLE_FAILURE,
  SIGNIN_GOOGLE_SUCCESS
} from "../actions/auth-actions/types";

const intialState = {
  user: null,
  isLoggedIn: false,
  isLoadingUser: true,
  token: null
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
      //start google
    case SIGNIN_GOOGLE_REQUEST:
      return {
        ...state,
        isLoadingUser: true
      };
    case SIGNIN_GOOGLE_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.access_token,
        isLoadingUser: false,
        isLoggedIn: true
      };

    case SIGNIN_GOOGLE_FAILURE:
      return {
        ...state,
        isLoadingUser: false,
        isLoggedIn: false
      };
      //end google
    //start facebook
    case SIGNIN_FACEBOOK_REQUEST:
      return {
        ...state,
        isLoadingUser: true
      };
    case SIGNIN_FACEBOOK_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.access_token,
        isLoadingUser: false,
        isLoggedIn: true
      };

    case SIGNIN_FACEBOOK_FAILURE:
      return {
        ...state,
        isLoadingUser: false,
        isLoggedIn: false
      };
    //end facebook
    case GET_AUTH_REQUEST:
      return {
        ...state,
        isLoadingUser: true
      };
    case GET_AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLoadingUser: false
      };

    case GET_AUTH_FAILURE:
      return {
        ...state,
        isLoadingUser: false,
        isLoggedIn: false
      };

    // Sign in
    case SIGNIN_REQUEST:
      return state;

    case SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true,
        token: action.payload.access_token
      };
    case SIGNIN_FAILURE:
      return state;

    //Sign up
    case SIGNUP_REQUEST:
      return state;
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true,
        token: action.payload.access_token
      };
    case SIGNUP_ERROR:
      return state;

    // Logout

    case LOGOUT_REQUEST:
      return state;

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        user: null
      };
    case LOGOUT_FAILURE:
      return state;

    // Connect & disconnect user ( no interaction with the server )
    case DISCONNECT_THE_USER:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        token: null
      };

    case CONNECT_THE_USER:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token // getting token from local storage
      };
    default:
      return state;
  }
};

export default authReducer;
