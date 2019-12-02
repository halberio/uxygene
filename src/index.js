import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { createBrowserHistory } from "history";
import axiosInstance from "./config/axios-instance";
import store from "./stores/store-dev";

import App from "./App";

import "antd/dist/antd.min.css";
import "./stylesheets/main.scss";

import { connectTheUser, getAuthUser } from "./actions/auth-actions/actions";
import LoadingIcon from "./components/loading-icon/LoadingIcon";
import {TimelineLite} from "gsap";

export const history = createBrowserHistory();

const token = localStorage.getItem("halber_token");

if (token) {
  // if token exists in local storage!
  store.dispatch(connectTheUser(token));
}

store.subscribe(() => {
  const reduxSubs = store.getState();
  if (reduxSubs.authReducer.token) {
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${reduxSubs.authReducer.token}`;
    axiosInstance.defaults.headers[
      "Authorization"
    ] = `Bearer ${reduxSubs.authReducer.token}`;
  }
});

const WrappedApp = props => {

  const [animationNotHiden, setanimationNotHiden] = useState(true);
  const fadeOutOnLeave = new TimelineLite();

  useEffect(()=>{
    if(props.isLoadingUser && token ){
      window.addEventListener(
          "load",
          function() {
            setTimeout(() => {
              fadeOutOnLeave.to(`#loading-animation-container`, 1, {
                opacity: 0, onComplete:()=>{
                  setanimationNotHiden(false);
                }
              });

            }, 500);
          },
          false
      );
    }
  },[props.isLoadingUser,fadeOutOnLeave])
  useEffect(() => {
    if (token) {
      // We need to check if the token are valid or not by getting the auth user
      props.store.dispatch(getAuthUser());
    }
  }, [props.store]);

  return (
    <>
      {/*if token is available we try to get the user once each time the app gets reloaded, so we don't need to
      fetch the auth user everytime we need him,*/}

      {  token && animationNotHiden===true ? <div id={"loading-animation-container"} className="loading-animation-container">
        <div className="round-container">
          <LoadingIcon />
        </div>
      </div> : props.children}
    </>
  );
};

const mapStateToProps = reduxStore => {
  return {
    isLoadingUser: reduxStore.authReducer.isLoadingUser
  };
};

const ConnectedWrappedApp = connect(mapStateToProps)(WrappedApp);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedWrappedApp store={store}>
      <Router history={history}>
        <App />
      </Router>
    </ConnectedWrappedApp>
  </Provider>,
  document.getElementById("root")
);
