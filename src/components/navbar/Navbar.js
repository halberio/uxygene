import React, { useEffect, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Motion, spring } from "react-motion";
import "./navbar.scss";
import "./drawer.scss";
import Logo from "../svg/Logo";
import { Affix } from "antd";
import LogoWhite from "../svg/LogoWhite";

const Navbar = props => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [textSpecificPageDisblyed, setTextSpecificPageDisblyed] = useState(
    false
  );
  const [textSpecificPageText, setTextSpecificPageText] = useState(
    "a mine of creative talents"
  );
  const [onScrollClassName, setOnScrollClassName] = useState("");
  useEffect(() => {
    if (
      window.location.pathname.includes("talents") ||
      window.location.pathname.includes("events")
    ) {
      setTextSpecificPageDisblyed(true);
      if (window.location.pathname.includes("talents")) {
        setTextSpecificPageText("a mine of creative talents");
      }
      if (window.location.pathname.includes("events")) {
        setTextSpecificPageText("A mosaic of UX events");
      }
    } else {
      setTextSpecificPageDisblyed(false);
    }


    props.history.listen(location => {
      setTimeout(() => {
        setDrawerOpened(false);
      }, 250);

      if (
        location.pathname.includes("talents") ||
        window.location.pathname.includes("events")
      ) {
        setTextSpecificPageDisblyed(true);
        if (window.location.pathname.includes("talents")) {
          setTextSpecificPageText("a mine of creative talents");
        }
        if (window.location.pathname.includes("events")) {
          setTextSpecificPageText("A mosaic of UX events");
        }
      } else {
        setTextSpecificPageDisblyed(false);
      }
    });
  }, [props.history]);

  const handleDrawerStatus = () => {
    setDrawerOpened(!drawerOpened);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 15) {
      setOnScrollClassName("on-scroll-navbar");
    } else {
      setOnScrollClassName("");
    }
  });
  return (
    <Affix offsetTop={0}>
      <div className={"navbar " + onScrollClassName}>
        <div className="brand">
          <NavLink to={"/"}>
            <Logo />
          </NavLink>
        </div>
        {textSpecificPageDisblyed ? (
          <div className="text-specific-pages">
            <h3 className="gold-text">TUNISIA…</h3>
            <h4 className={"bold-black"}>{textSpecificPageText}</h4>
          </div>
        ) : null}
        <div className="navigation">
          <NavLink
            exact
            className={"nav-link"}
            activeClassName={"active"}
            to={"/"}
          >
            {" "}
            HI!
          </NavLink>
          <NavLink
            className={"nav-link"}
            activeClassName={"active"}
            to={"/talents"}
          >
            {" "}
            UX TALENTS
          </NavLink>
          <NavLink
              className={"nav-link"}
              activeClassName={"active"}
              to={"/hosts"}
          >
            {" "}
            UX HOSTS
          </NavLink>
          <NavLink
            className={"nav-link"}
            activeClassName={"active"}
            to={"/events"}
          >
            {" "}
            UX EVENTS
          </NavLink>
          <NavLink
            className={"nav-link"}
            activeClassName={"active"}
            to={"/get-in-touch"}
          >
            {" "}
            GET IN TOUCH
          </NavLink>
        </div>
        <Motion style={{ x: spring(drawerOpened ? 255 : 0) }}>
          {({ x }) => (
            <div className="menu-icon" onClick={handleDrawerStatus}>
              <span
                style={{
                  background: `rgb(${x}, ${x}, ${x})`
                }}
              />
              <span
                style={{
                  background: `rgb(${x}, ${x}, ${x})`
                }}
              />
              <span
                style={{
                  background: `rgb(${x}, ${x}, ${x})`
                }}
              />
            </div>
          )}
        </Motion>

        <Motion style={{ x: spring(drawerOpened ? 1 : 0) }}>
          {({ x }) => (
            <div
              className="drawer"
              style={{
                opacity: x,
                pointerEvents: drawerOpened ? "all" : "none"
              }}
            >
              <div className="brand">
                <NavLink to={"/"}>
                  <LogoWhite />
                </NavLink>
              </div>
              <Motion
                style={{
                  x: spring(drawerOpened ? 0 : 200),
                  y: spring(drawerOpened ? 0 : 400),
                  w: spring(drawerOpened ? 0 : 600),
                  z: spring(drawerOpened ? 0 : 800),
                  o: spring(drawerOpened ? 1 : 0)
                }}
              >
                {({ x, y, w, z, o }) => (
                  <div className="menu-items">
                    <NavLink
                      exact
                      className={"nav-link"}
                      activeClassName={"active"}
                      to={"/"}
                      style={{
                        WebkitTransform: `translate3d(${-x}px, 0, 0)`,
                        transform: `translate3d(${-x}px, 0, 0)`,
                        opacity: o
                      }}
                    >
                      {" "}
                      Hi!
                    </NavLink>
                    <NavLink
                      className={"nav-link"}
                      activeClassName={"active"}
                      to={"/talents"}
                      style={{
                        WebkitTransform: `translate3d(${-y}px, 0, 0)`,
                        transform: `translate3d(${-y}px, 0, 0)`,
                        opacity: o
                      }}
                    >
                      {" "}
                      UX Talents
                    </NavLink>
                    <NavLink
                        className={"nav-link"}
                        activeClassName={"active"}
                        to={"/hosts"}
                        style={{
                          WebkitTransform: `translate3d(${-y}px, 0, 0)`,
                          transform: `translate3d(${-y}px, 0, 0)`,
                          opacity: o
                        }}
                    >
                      {" "}
                      UX Hosts
                    </NavLink>
                    <NavLink
                      className={"nav-link"}
                      activeClassName={"active"}
                      to={"/events"}
                      style={{
                        WebkitTransform: `translate3d(${-w}px, 0, 0)`,
                        transform: `translate3d(${-w}px, 0, 0)`,
                        opacity: o
                      }}
                    >
                      {" "}
                      UX Events
                    </NavLink>
                    <NavLink
                      className={"nav-link"}
                      activeClassName={"active"}
                      to={"/get-in-touch"}
                      style={{
                        WebkitTransform: `translate3d(${-z}px, 0, 0)`,
                        transform: `translate3d(${-z}px, 0, 0)`,
                        opacity: o
                      }}
                    >
                      {" "}
                      Get In Touch
                    </NavLink>
                  </div>
                )}
              </Motion>
            </div>
          )}
        </Motion>
      </div>
    </Affix>
  );
};
export default withRouter(Navbar);
