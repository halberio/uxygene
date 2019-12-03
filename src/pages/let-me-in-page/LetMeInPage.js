import React, { useState } from "react";
import "./let-me-in-page.scss";
import AndroidIcon from "../../components/svg/AndroidIcon";
import GoogleIcon from "../../components/svg/GoogleIcon";
import FacebookIcon from "../../components/svg/FacebookIcon";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";
import { loginFacebook, loginGoogle } from "../../actions/auth-actions/actions";
import { useDispatch } from "react-redux";
import SpaceShip from "../../components/svg/SpaceShip";
const LetMeInPage = () => {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState(0);

  const onFailure = error => {
    console.log(error);
  };

  const googleResponse = response => {
    try {
      const body = {
        providerId: response.googleId,
        email: response.profileObj.email,
        name:
          response.profileObj.givenName + " " + response.profileObj.familyName,
        first_name: response.profileObj.givenName,
        last_name: response.profileObj.familyName,
        socialImage: response.profileObj.imageUrl
      };
      dispatch(loginGoogle(body));
    } catch (e) {
      console.log("error google", e);
    }
  };

  const googleResponseHost = response => {
    try {
      const body = {
        providerId: response.googleId,
        email: response.profileObj.email,
        name:
          response.profileObj.givenName + " " + response.profileObj.familyName,
        first_name: response.profileObj.givenName,
        last_name: response.profileObj.familyName,
        socialImage: response.profileObj.imageUrl
      };
      dispatch(loginGoogle(body));
    } catch (e) {
      console.log("error google", e);
    }
  };

  const facebookResponse = response => {
    try {
      const body = {
        socialImage: response.picture.data.url,
        name: response.name,
        first_name: response.first_name,
        last_name: response.last_name,
        email: response.email,
        providerId: response.id
      };

      dispatch(loginFacebook(body));
    } catch (e) {
      console.log("error facebook", e);
    }
  };

  const changeSelectedTab = id => {
    setSelectedTab(id);
  };

  return (
    <div className={"let-me-in-page"}>
      <div className="row-container">
        <div className="column">
          <div className="first">
            <h1>Already member?</h1>
            <h2>We are</h2>
            <h2>Happy to see</h2>
            <h2>you again.</h2>
          </div>
          <div className="divider-main"></div>
          <div className="second">
            <h1>Are you new here?</h1>
            <h2 className={"black-h2"}>You are</h2>
            <h2 className={"black-h2"}>Welcome!</h2>
            <h2 className={"black-h2"}>In our community.</h2>
          </div>
        </div>
        <div className="row-into-2-column">
          <div
            onMouseEnter={() => changeSelectedTab(0)}
            className={
              selectedTab === 0 ? "card-auth-social active" : "card-auth-social"
            }
          >
            <div className="svg-container">
              <AndroidIcon />
            </div>
            <h3>I’m ux talent</h3>
            <div className="footer-log-items">
              <div className="items-links-social">
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_APP_ID}
                  buttonText="Login"
                  onSuccess={googleResponse}
                  onFailure={onFailure}
                  render={renderProps => (
                    <button
                      disabled={renderProps.disabled}
                      onClick={renderProps.onClick}
                      className={"link-social-log"}
                    >
                      <GoogleIcon />
                    </button>
                  )}
                />

                <FacebookLogin
                  appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                  autoLoad={false}
                  fields="name,email,picture,first_name,last_name"
                  callback={facebookResponse}
                  render={renderProps => (
                    <button
                      onClick={renderProps.onClick}
                      className={"link-social-log"}
                    >
                      <FacebookIcon />
                    </button>
                  )}
                />
              </div>
              <p>No personal information will be shared anywhere</p>
            </div>
          </div>
          <div
            onMouseEnter={() => changeSelectedTab(1)}
            className={
              selectedTab === 1 ? "card-auth-social active" : "card-auth-social"
            }
          >
            <div className="svg-container">
              <SpaceShip />
            </div>
            <h3>I’m a host</h3>
            <div className="footer-log-items">
              <div className="items-links-social">
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_APP_ID}
                  buttonText="Login"
                  onSuccess={googleResponseHost}
                  onFailure={onFailure}
                  render={renderProps => (
                    <button
                      disabled={renderProps.disabled}
                      onClick={renderProps.onClick}
                      className={"link-social-log"}
                    >
                      <GoogleIcon />
                    </button>
                  )}
                />
              </div>
              <p>No personal information will be shared anywhere</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetMeInPage;
