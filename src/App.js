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
import ProfileTalentPage from "./pages/profile-talent-page/ProfileTalentPage";
import HostsPage from "./pages/hosts-page/HostsPage";
import ProfileHostPage from "./pages/profile-host-page/ProfileHostPage";
import LoadingIcon from "./components/loading-icon/LoadingIcon";
const App = props => {
  const [backgroundColor, setBackgroundColor] = useState("#F8F7F7");
  const [animationHiden, setanimationHiden] = useState(false);
  const fadeOutOnLeave = new TimelineLite();
  window.addEventListener(
    "load",
    function() {
      setTimeout(() => {
        console.log("loaded");
        fadeOutOnLeave.to(`#loading-animation-container`, 1, {
          opacity: 0, onComplete:()=>{
            setanimationHiden(true);
          }
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
      {animationHiden===false ? <div id={"loading-animation-container"} className="loading-animation-container">
        <div className="round-container">
          <svg viewBox="0 0 212 212">
            <defs>
              <style>
                {
                  ".a{fill:red;}.b{fill:#fff;}.c{clip-path:url(#a);}.d{fill:url(#b);}.e{fill:#232323;}.f{fill:url(#d);}.g{opacity:0.9;}.h{fill:url(#f);}.i{stroke:#fcd774;stroke-width:10px;fill:url(#h);}.j{stroke:none;}.k{fill:none;}"
                }
              </style>
              <clipPath id="a">
                <circle
                    className="a"
                    cx={98}
                    cy={98}
                    r={98}
                    transform="translate(0.095 0.095)"
                />
              </clipPath>
              <linearGradient
                  id="b"
                  x1={0.5}
                  x2={0.5}
                  y2={0.546}
                  gradientUnits="objectBoundingBox"
              >
                <stop offset={0} stopColor="#ffba00" />
                <stop offset={1} stopColor="#ff7f00" />
              </linearGradient>
              <linearGradient
                  id="d"
                  x1={0.493}
                  y1={0.299}
                  x2={0.393}
                  y2={0.634}
                  gradientUnits="objectBoundingBox"
              >
                <stop offset={0.324} stopColor="#1a170e" stopOpacity={0} />
                <stop offset={1} stopColor="#040505" />
              </linearGradient>
              <linearGradient
                  id="f"
                  x1={0.5}
                  x2={0.5}
                  y2={1}
                  gradientUnits="objectBoundingBox"
              >
                <stop offset={0} stopColor="#ffe200" />
                <stop offset={0.414} stopColor="#fc0" />
                <stop offset={1} stopColor="#fc0" />
              </linearGradient>
              <radialGradient
                  id="h"
                  cx={0.5}
                  cy={0.5}
                  r={0.5}
                  gradientUnits="objectBoundingBox"
              >
                <stop offset={0} stopColor="#fc0" stopOpacity={0} />
                <stop offset={1} stopColor="#fc0" stopOpacity={0.114} />
              </radialGradient>
            </defs>
            <g transform="translate(-82 -300)">
              <circle
                  className="b"
                  cx={106}
                  cy={106}
                  r={106}
                  transform="translate(82 300)"
              />
              <g className="c" transform="translate(89.905 307.905)">
                <g transform="translate(-195.381 71.792)">
                  <path
                      className="d"
                      d="M5715.974,4922.709s-21.407,23.894-55.107,17.638-44.139-29.059-79.366-36.52-61.77,18.949-61.77,18.949l.064,118.761h196.179Z"
                      transform="translate(-5324.46 -4902.496)"
                  />
                  <path
                      className="d"
                      d="M5715.764,4922.767s-21.262,23.831-54.963,17.576-44.139-29.059-79.365-36.52-61.705,18.881-61.705,18.881v118.829h196.179Z"
                      transform="translate(-5519.73 -4902.491)"
                  />
                </g>
              </g>
              <g transform="translate(133.28 365.414)">
                <g transform="translate(0 0)">
                  <path
                      className="e"
                      d="M191.207,32.644H172.241a7.586,7.586,0,0,0-7.586,7.586V60.98a18.7,18.7,0,0,1-18.7,18.7h-3.569a18.7,18.7,0,0,1-18.7-18.7V40.23a7.586,7.586,0,0,0-7.586-7.586H97.139a7.585,7.585,0,0,0-7.586,7.586v20.7a52.885,52.885,0,0,0,52.885,52.885h3.47a52.885,52.885,0,0,0,52.885-52.885V40.23A7.585,7.585,0,0,0,191.207,32.644ZM177.684,58.462a3.833,3.833,0,0,1-5.42,0h0a3.83,3.83,0,0,1,0-5.42L176.3,49l-4.04-4.04a3.833,3.833,0,0,1,5.42-5.42L187.146,49l-3.975,3.975-1.447,1.447Zm13.5,0h0a3.835,3.835,0,0,1-5.422,0l-2.593-2.593,5.42-5.422,2.594,2.594A3.833,3.833,0,0,1,191.186,58.462Zm0-13.5-2.594,2.594-5.42-5.422,2.593-2.593a3.833,3.833,0,1,1,5.422,5.42Z"
                      transform="translate(-89.553 -32.644)"
                  />
                  <path
                      className="f"
                      d="M191.207,32.644H172.241a7.586,7.586,0,0,0-7.586,7.586V60.98a18.7,18.7,0,0,1-18.7,18.7h-3.569a18.7,18.7,0,0,1-18.7-18.7V40.23a7.586,7.586,0,0,0-7.586-7.586H97.139a7.585,7.585,0,0,0-7.586,7.586v20.7a52.885,52.885,0,0,0,52.885,52.885h3.47a52.885,52.885,0,0,0,52.885-52.885V40.23A7.585,7.585,0,0,0,191.207,32.644ZM177.684,58.462a3.833,3.833,0,0,1-5.42,0h0a3.83,3.83,0,0,1,0-5.42L176.3,49l-4.04-4.04a3.833,3.833,0,0,1,5.42-5.42L187.146,49l-3.975,3.975-1.447,1.447Zm13.5,0h0a3.835,3.835,0,0,1-5.422,0l-2.593-2.593,5.42-5.422,2.594,2.594A3.833,3.833,0,0,1,191.186,58.462Zm0-13.5-2.594,2.594-5.42-5.422,2.593-2.593a3.833,3.833,0,1,1,5.422,5.42Z"
                      transform="translate(-89.553 -32.644)"
                  />
                  <path
                      className="e"
                      d="M165.933,109.88H164.2c-35.823,0-39.978-39.4-40.453-47.451q-.042-.545-.053-1.1c-.007-.219-.009-.335-.009-.335V40.23a7.586,7.586,0,0,0-7.586-7.586H97.139a7.585,7.585,0,0,0-7.586,7.586v20.7a52.885,52.885,0,0,0,52.885,52.885h3.47A52.7,52.7,0,0,0,165.933,109.88Z"
                      transform="translate(-89.553 -32.644)"
                  />
                </g>
              </g>
              <g className="c" transform="translate(89.905 307.905)">
                <g className="g" transform="translate(-0.046 71.792)">
                  <path
                      className="h"
                      d="M5519.73,4922.709s21.406,23.894,55.107,17.638,44.139-29.059,79.365-36.52,61.771,18.949,61.771,18.949l-.064,118.761H5519.73Z"
                      transform="translate(-5519.73 -4902.496)"
                  />
                  <path
                      className="h"
                      d="M5519.875,4922.767s21.262,23.831,54.963,17.576,44.139-29.059,79.365-36.52,61.706,18.881,61.706,18.881v118.829H5519.73Z"
                      transform="translate(-5324.396 -4902.491)"
                  />
                </g>
              </g>
              <g className="i" transform="translate(82 300)">
                <circle className="j" cx={106} cy={106} r={106} />
                <circle className="k" cx={106} cy={106} r={101} />
              </g>
            </g>
          </svg>
        </div>
      </div>:null}
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
                <Route exact path={"/talent-user/:id"} component={ProfileTalentPage} />
                <Route exact path={"/hosts-profile/:id"} component={ProfileHostPage} />
                <Route
                  exact
                  path={"/get-in-touch"}
                  component={GetInTouchPage}
                />

                <Route path="/talents" component={TalentsPage} />
                <Route path="/hosts" component={HostsPage} />
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
