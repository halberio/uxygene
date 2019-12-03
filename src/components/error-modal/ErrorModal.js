import React from "react";
import "./error-modal.scss";
import BrokenSmiley from "../svg/BrokenSmiley";
import { Motion, spring } from "react-motion";
const ErrorModal = props => {
  const refreshThePage = () => {
    window.location.reload();
  };
  return (
    <Motion
      style={{
        scaleValue: spring(props.isVisible ? 1 : 0),
        opacityValue: spring(props.isVisible ? 1 : 0)
      }}
    >
      {({ scaleValue, opacityValue }) => (
        <div
          className={"error-modal-container"}
          style={{
            opacity: opacityValue,
            pointerEvents: props.isVisible ? "all" : "none"
          }}
        >
          <div className="max-witdh-container-modal">
            <div
              className="error-modal"
              style={{
                transform: `scale(${scaleValue})`
              }}
            >
              <div className="svg-holder">
                <BrokenSmiley />
              </div>
              <h1>
                {props && props.errorMsg
                  ? props.errorMsg
                  : "It seems that something is not working as desired."}
              </h1>
              <h3>
                {props && props.secondaryMsg
                  ? props.secondaryMsg
                  : "Try to check your internet connection"}
              </h3>
              {props && props.refreshPageBtnVisible === true ? (
                <button onClick={refreshThePage}>Refresh the page</button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </Motion>
  );
};

export default ErrorModal;
