import React from "react";
import "./google-form-page.scss";
import LoadingIcon from "../../components/loading-icon/LoadingIcon";

const GoogleFormPage = () => {
  return (
    <div className={"google-form-page"}>
      <div className="max-width-container">
        <div className="row-container">
          <div className="left">
            <h1>You’r</h1>
            <h2>
              Welcome <span>uxer</span>
            </h2>
            <div className="divider-ux"></div>
            <h3>We are happy to see you in our community.</h3>
            <p>
              Your registration will be studied by our team and we will come
              back to you for confirmation. The estimated sensitive data will
              never be communicated to anywhere.
            </p>
          </div>
          <div className="right">
            <iframe
              title={"uxygène form"}
              src="https://docs.google.com/forms/d/e/1FAIpQLSe6gVcH2Tf9fvvzXATe34hem1Jpd4EAGxNbnYDWYMuGRoDo0g/viewform?embedded=true"
              width="100%"
              height="2975"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              <LoadingIcon />
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleFormPage;
