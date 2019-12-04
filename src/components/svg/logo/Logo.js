import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "./logo-svg-navbar-container.scss";
import { Motion, spring } from "react-motion";
import logoSmall from "../../../assets/img/logo-small.png";
import logoWord from "../../../assets/img/logo-word.png";
const Logo = props => {
  const [isInHome, setIsHome] = useState(true);
  const [loaded, setloaded] = useState(false);
  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsHome(true);
      setTimeout(() => {
        setloaded(true);
      }, 2400);
    } else setIsHome(false);
    props.history.listen(location => {
      setTimeout(() => {
        setloaded(true);
      }, 1000);
      if (location.pathname === "/") {
        setIsHome(true);
      } else setIsHome(false);
    });
  }, [props.history]);
  return (
    <Motion
      style={{
        x: spring(isInHome ? 25 : 0, { stiffness: 300, damping: 40 }),
        x2: spring(isInHome ? 5 : 0, { stiffness: 300, damping: 40 }),
        y: spring(isInHome ? 1 : 0, { stiffness: 300, damping: 40 }),
        scaleOfLogoSub: spring(loaded ? 1 : 0, { stiffness: 300, damping: 40 })
      }}
    >
      {({ x, y, x2, scaleOfLogoSub }) => (
        <div className={"logo-svg-navbar-container"}>
          <img
            src={logoSmall}
            alt="uxygène logo"
            id={"logo-part-top-ux"}
            style={{
              marginLeft: `${x}px`
            }}
          />
          {loaded ? (
            <img
              id={"ux-word-logo-par"}
              style={{
                transform: `scale(${scaleOfLogoSub})`,
                WebkitTransform: `scale(${scaleOfLogoSub})`,
                opacity: `${y}`,
                marginLeft: `${x2}px`
              }}
              src={logoWord}
              alt="uxygène world logo"
            />
          ) : null}
        </div>
      )}
    </Motion>
  );
};

export default withRouter(Logo);
