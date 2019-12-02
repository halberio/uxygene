/*
@
 This file contains the requests ( services )
@
*/

import axiosInstance from "../../config/axios-instance";


function signInFacebookRequest(body) {
  return axiosInstance({
    method: "post",
    url: "auth/social-login",
    data: body
  });
}

function signInGoogleRequest(body) {
  return axiosInstance({
    method: "post",
    url: "auth/social-login",
    data: body
  });
}

function logoutRequest() {
  return axiosInstance({
    method: "get",
    url: "auth/logout",
    data: null
  });
}

function signinRequest(body) {
  return axiosInstance({
    method: "post",
    url: "auth/signin",
    data: body
  });
}

function signupRequest(body) {
  return axiosInstance({
    method: "post",
    url: "auth/signup",
    data: body
  });
}

function getAuthUserRequest() {
  return axiosInstance({
    method: "get",
    url: "auth/user"
  });
}

const AuthServices = {
  signinRequest,
  signupRequest,
  logoutRequest,
  getAuthUserRequest,
  signInFacebookRequest,
  signInGoogleRequest
};

export default AuthServices;
