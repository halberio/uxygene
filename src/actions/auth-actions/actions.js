/*
@
 This file contains the actions creators
@
*/

import {
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  GET_AUTH_SUCCESS,
  GET_AUTH_FAILURE,
  GET_AUTH_REQUEST,
  LOGOUT_REQUEST,
  CONNECT_THE_USER,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SIGNIN_FACEBOOK_REQUEST,
  SIGNIN_FACEBOOK_FAILURE,
  SIGNIN_FACEBOOK_SUCCESS,
  SIGNIN_GOOGLE_REQUEST,
  SIGNIN_GOOGLE_FAILURE,
  SIGNIN_GOOGLE_SUCCESS
} from "./types";

import AuthServices from "./service";

export function loginGoogle(body) {
  return async dispatch => {
    await dispatch({
      type: SIGNIN_GOOGLE_REQUEST
    });
    try {
      const response = await AuthServices.signInGoogleRequest(body);

      await dispatch({
        type: SIGNIN_GOOGLE_SUCCESS,
        payload: response.data
      });
      localStorage.setItem("halber_token", response.data.access_token);
    } catch (e) {
      dispatch({
        type: SIGNIN_GOOGLE_FAILURE
      });
    }
  };
}

export function loginFacebook(body) {
  return async dispatch => {
    await dispatch({
      type: SIGNIN_FACEBOOK_REQUEST
    });
    try {
      const response = await AuthServices.signInFacebookRequest(body);
      localStorage.setItem("halber_token", response.data.access_token);
      console.log(response);
      await dispatch({
        type: SIGNIN_FACEBOOK_SUCCESS,
        payload: response.data
      });
      localStorage.setItem("halber_token", response.data.access_token);
    } catch (e) {
      dispatch({
        type: SIGNIN_FACEBOOK_FAILURE
      });
    }
  };
}
export function getAuthUser() {
  return async dispatch => {
    await dispatch({
      type: GET_AUTH_REQUEST
    });
    try {
      const response = await AuthServices.getAuthUserRequest();

      await dispatch({
        type: GET_AUTH_SUCCESS,
        payload: {
          user: response.data,
          isLoggedIn: true
        }
      });
    } catch (e) {
      dispatch({
        type: GET_AUTH_FAILURE
      });
    }
  };
}

export function signin(values) {
  return async dispatch => {
    dispatch({ type: SIGNIN_REQUEST });
    try {
      const response = await AuthServices.signinRequest(values);
      dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
      localStorage.setItem("halber_token", response.data.access_token);
    } catch (e) {
      dispatch({ type: SIGNIN_FAILURE });
    }
  };
}

export function signup(body) {
  return async dispatch => {
    dispatch({ type: SIGNUP_REQUEST });
    try {
      const response = await AuthServices.signupRequest(body);
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
      localStorage.setItem("halber_token", response.data.access_token);
    } catch (e) {
      dispatch({ type: SIGNUP_ERROR });
    }
  };
}

export function logout() {
  return async dispatch => {
    dispatch({ type: LOGOUT_REQUEST });
    try {
      await AuthServices.logoutRequest();
      localStorage.removeItem("halber_token");
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (e) {
      dispatch({ type: LOGOUT_FAILURE });
    }
  };
}

export function connectTheUser(token) {
  return async dispatch => {
    localStorage.setItem("halber_token", token);
    dispatch({
      type: CONNECT_THE_USER,
      payload: {
        token: token
      }
    });
  };
}
