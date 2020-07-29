import React, { useEffect, useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Motion, spring } from "react-motion";
import "./navbar.scss";
import "./drawer.scss";
import Logo from "../svg/logo/Logo";
import { Affix } from "antd";
import LogoWhite from "../svg/LogoWhite";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth-actions/actions";
import LogoutIcon from "../svg/LogoutIcon";
import { showModalRight } from "../../actions/interface-actions/actions";
const Navbar = props => {
  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);
  const user = useSelector(state => state.authReducer.user);
  const dispatch = useDispatch();
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [textSpecificPageDisblyed, setTextSpecificPageDisblyed] = useState(
    false
  );
  const [textSpecificPageText, setTextSpecificPageText] = useState(
    "a mine of creative talents"
  );
  const [onScrollClassName, setOnScrollClassName] = useState("");
  const [userTabShowen, setUserTabShowen] = useState(false);
  const messageModal = {
    title: "See you again!",
    subTitle: "You logged out successfully.",
    content: "You can send us your feedback: hello@uxygène.com"
  };
  const logoutHandler = async () => {
    await dispatch(logout());
    dispatch(showModalRight(messageModal));
  };

  useEffect(() => {
    if (
      window.location.pathname.includes("talents") ||
      window.location.pathname.includes("events") ||
      window.location.pathname.includes("hosts")
    ) {
      setTextSpecificPageDisblyed(true);
      if (window.location.pathname.includes("talents")) {
        setTextSpecificPageText("a mine of creative talents");
      }
      if (window.location.pathname.includes("hosts")) {
        setTextSpecificPageText("believes in ux !");
      }
      if (window.location.pathname.includes("events")) {
        setTextSpecificPageText("A mosaic of UX events");
      }
    } else {
      setTextSpecificPageDisblyed(false);
    }

    props.history.listen(location => {
      window.scrollTo({
        top: 0,
        left: 0
      });
      setTimeout(() => {
        setDrawerOpened(false);
      }, 250);

      if (
        location.pathname.includes("talents") ||
        window.location.pathname.includes("events") ||
        window.location.pathname.includes("hosts")
      ) {
        setTextSpecificPageDisblyed(true);
        if (window.location.pathname.includes("talents")) {
          setTextSpecificPageText("a mine of creative talents");
        }
        if (window.location.pathname.includes("hosts")) {
          setTextSpecificPageText("believes in ux !");
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
    if (window.scrollY >= 30) {
      setOnScrollClassName("on-scroll-navbar");
    } else {
      setOnScrollClassName("");
    }
  });

  const logoutHandlerMobile = async () => {
    await setUserTabShowen(false);
    setTimeout(async () => {
      await dispatch(logout());
      dispatch(showModalRight(messageModal));
    }, 400);
  };
  const showUserTabOnMobile = () => {
    setUserTabShowen(!userTabShowen);
  };
  return (
    <>
      <Affix offsetTop={0}>
        <div className={"navbar " + onScrollClassName}>
          <div className="fixed-with-container">
            <div className="brand">
              <NavLink to={"/"}>
                <Logo />
              </NavLink>
            </div>
            <Motion
              style={{
                x: spring(textSpecificPageDisblyed ? 0 : 30),
                o: spring(textSpecificPageDisblyed ? 1 : 0)
              }}
            >
              {({ x, o }) => (
                <div
                  className="text-specific-pages"
                  style={{
                    WebkitTransform: `translateX(${x}px)`,
                    transform: `translateX(${x}px)`,
                    opacity: o
                  }}
                >
                  <h3 className="gold-text">TUNISIA…</h3>
                  <h4 className={"bold-black"}>{textSpecificPageText}</h4>
                </div>
              )}
            </Motion>
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

              <div className="navilink-btn-container">
                {!isLoggedIn ? (
                  <NavLink
                    className={"nav-link btn-login"}
                    activeClassName={"active"}
                    to={"/let-me-in"}
                  >
                    {" "}
                    Let me in!
                  </NavLink>
                ) : (
                  <div className="logged-user-infos">
                    <p>
                      {user && user.first_name
                        ? user.first_name
                        : user && user.name
                        ? user.name
                        : null}
                    </p>
                    <div className="img-profile-container">
                      {user && user.image ? (
                        <img
                          width={"50px"}
                          height={"5px"}
                          src={process.env.REACT_APP_STORAGE_URL + user.image}
                          alt={user && user.name ? user.name : null}
                        />
                      ) : user && user.social_image ? (
                        <img
                          width={"50px"}
                          height={"5px"}
                          src={user.social_image}
                          alt={user && user.name ? user.name : null}
                        />
                      ) : null}
                    </div>
                    <div className="logout-icon" onClick={logoutHandler}>
                      <LogoutIcon />
                    </div>
                  </div>
                )}
              </div>
            </div>
            {isLoggedIn ? (
              <button
                onClick={showUserTabOnMobile}
                className="logged-user-infos only-mobile"
              >
                <div className="img-profile-container">
                  {user && user.image ? (
                    <img
                      width={"50px"}
                      height={"5px"}
                      src={process.env.REACT_APP_STORAGE_URL + user.image}
                      alt={user && user.name ? user.name : null}
                    />
                  ) : user && user.social_image ? (
                    <img
                      width={"50px"}
                      height={"5px"}
                      src={user.social_image}
                      alt={user && user.name ? user.name : null}
                    />
                  ) : null}
                  <div
                    className="logout-icon"
                    onClick={() => {
                      logoutHandler();

                      setDrawerOpened(false);
                    }}
                  >
                    <LogoutIcon />
                  </div>
                </div>
              </button>
            ) : null}
            <Motion
              style={{
                x: spring(drawerOpened ? 255 : 0),
                widthSpan: spring(drawerOpened ? 24 : 6),
                heightSpan: spring(drawerOpened ? 4 : 6),
                borderRadiusSpan: spring(drawerOpened ? 3 : 100),
                rotation: spring(drawerOpened ? 45 : 0),
                zeroWidth: spring(drawerOpened ? 5 : 6),
                opacityValueMiddle: spring(drawerOpened ? 0 : 1)
              }}
            >
              {({
                x,
                widthSpan,
                borderRadiusSpan,
                heightSpan,
                rotation,
                zeroWidth,
                opacityValueMiddle
              }) => (
                <div className="menu-icon" onClick={handleDrawerStatus}>
                  <span
                    style={{
                      background: `rgb(${x}, ${x}, ${x})`,
                      width: ` ${widthSpan}px `,
                      height: ` ${heightSpan}px `,
                      borderRadius: `${borderRadiusSpan}%`,
                      transformOrigin: "right",
                      transform: `rotate(${-rotation}deg)`,
                      WebkitTransformOrigin: "right",
                      WebkitTransform: `rotate(${-rotation}deg)`
                    }}
                  />
                  <span
                    style={{
                      transformOrigin: "center center",
                      WebkitTransformOrigin: "center center",
                      WebkitTransform: "center center",
                      opacity: `${opacityValueMiddle}`,
                      background: `rgb(${x}, ${x}, ${x})`,
                      width: ` ${zeroWidth}px `,
                      height: ` ${zeroWidth}px `,
                      borderRadius: `${borderRadiusSpan}%`
                    }}
                  />
                  <span
                    style={{
                      background: `rgb(${x}, ${x}, ${x})`,
                      width: ` ${widthSpan}px `,
                      height: ` ${heightSpan}px `,
                      borderRadius: `${borderRadiusSpan}%`,
                      transformOrigin: "right",
                      transform: `rotate(${rotation}deg)`,
                      WebkitTransformOrigin: "right",
                      WebkitTransform: `rotate(${rotation}deg)`
                    }}
                  />
                </div>
              )}
            </Motion>
          </div>
        </div>
      </Affix>

      <Motion
        style={{
          x: spring(drawerOpened ? 1 : 0),
          i1: spring(drawerOpened ? 0 : 40, {
            stiffness: 60,
            damping: 10
          }),
          i2: spring(drawerOpened ? 0 : 50, {
            stiffness: 60,
            damping: 10
          }),
          o: spring(drawerOpened ? 1 : 0)
        }}
      >
        {({ x, i1, i2, o }) => (
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

                  {!isLoggedIn ? (
                    <NavLink
                      className={"nav-link let-me-in"}
                      activeClassName={"active"}
                      to={"/let-me-in"}
                      style={{
                        WebkitTransform: `translate3d(${-z}px, 0, 0)`,
                        transform: `translate3d(${-z}px, 0, 0)`,
                        opacity: o
                      }}
                    >
                      {" "}
                      Let me in!
                    </NavLink>
                  ) : null}
                </div>
              )}
            </Motion>

            <div className="bottom-links">
              <Link
                to={"/privacy-policy"}
                style={{
                  WebkitTransform: `translate3d(${-i1}px, 0, 0)`,
                  transform: `translate3d(${-i1}px, 0, 0)`,
                  opacity: o
                }}
              >
                Privacy Policy
              </Link>
              <Link
                to={"/terms-and-conditions"}
                style={{
                  WebkitTransform: `translate3d(${-i2}px, 0, 0)`,
                  transform: `translate3d(${-i2}px, 0, 0)`,
                  opacity: o
                }}
              >
                Terms and conditions
              </Link>
            </div>
          </div>
        )}
      </Motion>
      {isLoggedIn ? (
        <Motion style={{ x: spring(userTabShowen ? 0 : 200) }}>
          {({ x }) => (
            <div
              onMouseLeave={() => setUserTabShowen(false)}
              onMouseOutCapture={() => setUserTabShowen(false)}
              style={{
                WebkitTransform: `translateY(${x}%)`,
                transform: `translateY(${x}%)`
              }}
              className="user-tab-only-mobile"
            >
              <>
                <div className="img-container">
                  {user && user.image ? (
                    <img
                      width={"50px"}
                      height={"5px"}
                      src={process.env.REACT_APP_STORAGE_URL + user.image}
                      alt={user && user.name ? user.name : null}
                    />
                  ) : user && user.social_image ? (
                    <img
                      width={"50px"}
                      height={"5px"}
                      src={user.social_image}
                      alt={user && user.name ? user.name : null}
                    />
                  ) : null}
                </div>

                <h1>Hi {user && user.first_name ? user.first_name : null}</h1>
                <button onClick={logoutHandlerMobile}>DISCONNECT</button>
              </>
            </div>
          )}
        </Motion>
      ) : null}
    </>
  );
};
export default withRouter(Navbar);
