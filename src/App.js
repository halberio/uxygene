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
         <LoadingIcon />
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
