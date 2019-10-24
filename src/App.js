import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import Navbar from "./components/navbar/Navbar";
import SigninPage from "./pages/signin-page/SigninPage";

import SignUpPage from "./pages/signup-page/SignUpPage";
import { logout } from "./actions/auth-actions/actions";
import TalentsPage from "./pages/talents-page/TalentsPage";
import GetInTouchPage from "./pages/get-in-touch-page/GetInTouchPage";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import EventsPage from "./pages/events-page/EventsPage";
import { TimelineLite } from "gsap";
const App = props => {
  const [backgroundColor, setBackgroundColor] = useState("#F8F7F7");
  const fadeOutOnLeave = new TimelineLite();
  window.addEventListener(
    "load",
    function() {
      setTimeout(() => {
        console.log("loaded");
        fadeOutOnLeave.to(`.loading-animation-container`, 1, {
          opacity: 0
        });
        fadeOutOnLeave.to(`.loading-animation-container`, 1, {
          display: "none"
        });
      }, 1000);
    },
    false
  );

  useEffect(() => {
    if (window.location.pathname === "/") {
      setBackgroundColor("#F0F0F0");
    } else {
      setBackgroundColor("#F8F7F7");
    }
    props.history.listen(location => {
      if (location.pathname === "/") {
        setBackgroundColor("#F0F0F0");
      } else {
        setBackgroundColor("#F8F7F7");
      }
    });
  }, [props.history]);
  return (
    <div
      className={"app"}
      style={{
        background: backgroundColor
      }}
    >
      <div className="loading-animation-container">
        <div className="round-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50">
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.493"
                y1="0.299"
                x2="0.393"
                y2="0.634"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0.324" stopColor="#1a170e" stopOpacity="0" />
                <stop offset="1" stopColor="#040505" />
              </linearGradient>
            </defs>
            <g
              id="logo_header"
              data-name="logo header"
              transform="translate(-138.703 -40)"
            >
              <g
                id="Group_21"
                data-name="Group 21"
                transform="translate(23.561 7.356)"
              >
                <path
                  id="Path_24"
                  data-name="Path 24"
                  d="M160.275,32.644H147.08a5.278,5.278,0,0,0-5.277,5.277V52.358a13.008,13.008,0,0,1-13.008,13.008h-2.483A13.008,13.008,0,0,1,113.3,52.358V37.921a5.278,5.278,0,0,0-5.277-5.277H94.83a5.277,5.277,0,0,0-5.277,5.277v14.4a36.793,36.793,0,0,0,36.793,36.793h2.414a36.793,36.793,0,0,0,36.793-36.793v-14.4A5.277,5.277,0,0,0,160.275,32.644Zm-9.408,17.962a2.666,2.666,0,0,1-3.771,0h0a2.664,2.664,0,0,1,0-3.771l2.811-2.812L147.1,41.212a2.666,2.666,0,1,1,3.771-3.771l6.583,6.582-2.765,2.765-1.007,1.007Zm9.393,0h0a2.668,2.668,0,0,1-3.772,0l-1.8-1.8,3.771-3.772,1.8,1.805A2.666,2.666,0,0,1,160.26,50.606Zm0-9.393-1.8,1.805-3.771-3.772,1.8-1.8a2.667,2.667,0,1,1,3.772,3.771Z"
                  transform="translate(25.589)"
                  fill="#232323"
                />
                <path
                  id="Path_25"
                  data-name="Path 25"
                  d="M160.275,32.644H147.08a5.278,5.278,0,0,0-5.277,5.277V52.358a13.008,13.008,0,0,1-13.008,13.008h-2.483A13.008,13.008,0,0,1,113.3,52.358V37.921a5.278,5.278,0,0,0-5.277-5.277H94.83a5.277,5.277,0,0,0-5.277,5.277v14.4a36.793,36.793,0,0,0,36.793,36.793h2.414a36.793,36.793,0,0,0,36.793-36.793v-14.4A5.277,5.277,0,0,0,160.275,32.644Zm-9.408,17.962a2.666,2.666,0,0,1-3.771,0h0a2.664,2.664,0,0,1,0-3.771l2.811-2.812L147.1,41.212a2.666,2.666,0,1,1,3.771-3.771l6.583,6.582-2.765,2.765-1.007,1.007Zm9.393,0h0a2.668,2.668,0,0,1-3.772,0l-1.8-1.8,3.771-3.772,1.8,1.805A2.666,2.666,0,0,1,160.26,50.606Zm0-9.393-1.8,1.805-3.771-3.772,1.8-1.8a2.667,2.667,0,1,1,3.772,3.771Z"
                  transform="translate(25.589)"
                  fill="url(#linear-gradient)"
                />
                <path
                  id="Path_26"
                  data-name="Path 26"
                  d="M142.691,86.378h-1.2c-24.923,0-27.813-27.414-28.143-33.012q-.029-.379-.037-.763c0-.152-.006-.233-.006-.233h0V37.921a5.278,5.278,0,0,0-5.277-5.277H94.83a5.277,5.277,0,0,0-5.277,5.277v14.4a36.793,36.793,0,0,0,36.793,36.793h2.414A36.667,36.667,0,0,0,142.691,86.378Z"
                  transform="translate(25.589)"
                  fill="#232323"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <Navbar
        user={props.user}
        isLoggedIn={props.isLoggedIn}
        logout={props.logout}
      />
      <Route
        render={({ location }) => (
          <TransitionGroup className={"page-container"}>
            <CSSTransition
              key={location.key}
              timeout={500}
              classNames="fadetransition"
            >
              <Switch location={location}>
                <Route exact path={"/"} component={HomePage} />
                <Route
                  exact
                  path={"/get-in-touch"}
                  component={GetInTouchPage}
                />

                <Route path="/talents" component={TalentsPage} />
                <Route path="/events" component={EventsPage} />
                <GuestRoute
                  authenticated={props.isLoggedIn}
                  path="/signup"
                  component={SignUpPage}
                />
                <AuthRoute
                  authenticated={props.isLoggedIn}
                  path="/profile"
                  component={HomePage}
                />
                <GuestRoute
                  authenticated={props.isLoggedIn}
                  path="/signin"
                  component={SigninPage}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
};
function AuthRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      exact
      render={props =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function GuestRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      exact
      render={props =>
        !authenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

const mapStateToProps = reduxStore => {
  return {
    isLoggedIn: reduxStore.authReducer.isLoggedIn,
    user: reduxStore.authReducer.user,
    isLoadingUser: reduxStore.authReducer.isLoadingUser
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(App)
);
