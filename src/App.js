import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import Navbar from "./components/navbar/Navbar";
import { logout } from "./actions/auth-actions/actions";
import TalentsPage from "./pages/talents-page/TalentsPage";
import GetInTouchPage from "./pages/get-in-touch-page/GetInTouchPage";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import EventsPage from "./pages/events-page/EventsPage";
import ProfileTalentPage from "./pages/profile-talent-page/ProfileTalentPage";
import HostsPage from "./pages/hosts-page/HostsPage";
import ProfileHostPage from "./pages/profile-host-page/ProfileHostPage";
import PrivacyPolicyPage from "./pages/privacy-policy-page/PrivacyPolicyPage";
import Footer from "./components/footer/Footer";
import NotFoundPage from "./pages/404-page/NotFoundPage";
import TermsAndConditionsPage from "./pages/terms-and-conditions-page/TermsAndConditionsPage";
import LetMeInPage from "./pages/let-me-in-page/LetMeInPage";
import GoogleFormPage from "./pages/google-form-page/GoogleFormPage";
import ResultSearchTalentsPage from "./pages/result-search-talents-page/ResultSearchTalentsPage";
import RightAlertModal from "./components/right-alert-modal/RightAlertModal";
import ResultSearchEventsPage from "./pages/result-search-events-page/ResultSearchEventsPage";
const App = props => {
  const [backgroundColor, setBackgroundColor] = useState("#F8F7F7");
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

  useEffect(() => {
    const cursor = document.querySelector(".ux-cursor");
    if (document.getElementsByTagName) {
      let aElements = document.getElementsByTagName("a");
      let buttonsElements = document.getElementsByTagName("button");
      let inputsElements = document.getElementsByTagName("input");
      for (let i = 0; aElements[i]; i++) {
        if (aElements && aElements[i]) {
          aElements[i].addEventListener("mouseover", function(event) {
            cursor.classList.add("on-hover");
          });
          aElements[i].addEventListener("mouseleave", function(event) {
            cursor.classList.remove("on-hover");
          });
        }
      }
      for (let i = 0; buttonsElements[i]; i++) {
        if (buttonsElements && buttonsElements[i]) {
          buttonsElements[i].addEventListener("mouseover", function(event) {
            cursor.classList.add("on-hover");
          });
          buttonsElements[i].addEventListener("mouseleave", function(event) {
            cursor.classList.remove("on-hover");
          });
        }
      }
      for (let i = 0; inputsElements[i]; i++) {
        if (inputsElements && inputsElements[i]) {
          inputsElements[i].addEventListener("focus", function(event) {
            cursor.classList.add("on-focus");
          });
          inputsElements[i].addEventListener("mouseover", function(event) {
            cursor.classList.add("on-focus");
          });
          inputsElements[i].addEventListener("mouseleave", function(event) {
            cursor.classList.remove("on-focus");
          });
        }
      }
    }
  }, []);
  return (
    <>
      <RightAlertModal />
      <div
        className={"app"}
        style={{
          background: backgroundColor
        }}
      >
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
                    path={"/talent-user/:id"}
                    component={ProfileTalentPage}
                  />
                  <Route
                    exact
                    path={"/privacy-policy"}
                    component={PrivacyPolicyPage}
                  />
                  <Route
                    exact
                    path={"/terms-and-conditions"}
                    component={TermsAndConditionsPage}
                  />
                  <Route
                    exact
                    path={"/hosts-profile/:id"}
                    component={ProfileHostPage}
                  />
                  <Route
                    exact
                    path={"/get-in-touch"}
                    component={GetInTouchPage}
                  />
                  <Route exact path={"/g-form"} component={GoogleFormPage} />
                  <Route path="/talents" component={TalentsPage} />
                  <Route path="/hosts" component={HostsPage} />
                  <Route path="/events" component={EventsPage} />
                  <GuestRoute
                    authenticated={props.isLoggedIn}
                    path="/let-me-in"
                    component={LetMeInPage}
                  />
                  <AuthRoute
                    authenticated={props.isLoggedIn}
                    path="/profile"
                    component={HomePage}
                  />

                  <Route
                    path="/search-talents/:name"
                    component={ResultSearchTalentsPage}
                  />
                  <Route
                    path="/search-events/:name"
                    component={ResultSearchEventsPage}
                  />
                  <Route component={NotFoundPage} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Footer />
      </div>
    </>
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
