import React, { useEffect, useState } from "react";
import "./profile-talent-page.scss";
import ConfirmedBadge from "../../components/svg/ConfirmedBadge";
import { withRouter } from "react-router-dom";
import axios from "axios";
import LoadingIcon from "../../components/loading-icon/LoadingIcon";
import { Motion, spring } from "react-motion";
import ArrowLeftBlack from "../../components/svg/ArrowLeftBlack";
import InviteTalentForm from "../../components/invite-talent-form/InviteTalentForm";
import { useDispatch } from "react-redux";
import { addTalentVote } from "../../actions/talents-actions/actions";
import BatrieIcon from "../../components/svg/BatrieIcon";
import HatOutlineIcon from "../../components/svg/HatOutlineIcon";
import AndroidOutlineSvg from "../../components/svg/AndroidOutlineIcon";
import MoneyIcon from "../../components/svg/MoneyIcon";
const ProfileTalentPage = props => {
  const [userData, setUserData] = useState({});
  const [isLoadingData, setIsloadingData] = useState(true);
  const [formOpened, setFormOpened] = useState(false);
  const [userVotes, setUserVotes] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsloadingData(true);
    (async () => {
      await axios
        .get(
          process.env.REACT_APP_API_URL + "/talents/" + props.match.params.id
        )
        .then(function(response) {
          setUserData(response.data);
          setIsloadingData(false);
        })
        .catch(function(error) {
          console.log(error);
        });
    })();
  }, [props.match.params.id]);
  const closePageOrGoBack = () => {
    if (!formOpened) {
      props.history.push("/talents");
    } else {
      setFormOpened(false);
    }
  };

  const openFormIfNotOpened = () => {
    setFormOpened(true);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }, 400);
  };

  const voteUpHandler = id => {
    if (userData) {
      dispatch(addTalentVote(id));
      setUserVotes(userVotes + 1);
    }
  };
  useEffect(() => {
    setUserVotes(userData.votes);
  }, [userData]);

  return (
    <div className={"user-talent-profile-page"}>
      {isLoadingData ? (
        <LoadingIcon scale={0.4} />
      ) : (
        <Motion style={{ grayScaleValue: spring(isLoadingData ? 90 : 0) }}>
          {({ grayScaleValue }) => (
            <div
              className="max-width-container"
              style={{
                filter: `grayscale(${grayScaleValue}%)`
              }}
            >
              <div className="left">
                <div className="top">
                  <div className="user-infos">
                    <h1>{userData && userData.name ? userData.name : null}</h1>
                    <h2>
                      {userData && userData.title ? userData.title : null}
                    </h2>
                  </div>
                  <div className="confirmed-container">
                    <span>
                      {userData && userData.is_confirmed ? "confirmed" : null}
                    </span>

                    {userData && userData.is_confirmed ? (
                      <ConfirmedBadge />
                    ) : null}
                  </div>
                </div>
                <div className="content">
                  <p>{userData && userData.about ? userData.about : null}</p>
                </div>
                <div className="footer">
                  <div className="item">
                    <AndroidOutlineSvg />{" "}
                    <h4>Public vote on training skills </h4>{" "}
                    {userData && userData.id ? (
                      <button
                        onClick={() => voteUpHandler(userData.id)}
                        className={"vote-btn"}
                      >
                        UPVOTE{" "}
                        <span className="number">
                          {userData && userData.votes && userData.votes
                            ? userVotes
                            : null}
                        </span>
                      </button>
                    ) : null}
                  </div>
                  <div className="item">
                    <BatrieIcon /> <h4>Skills </h4>{" "}
                    <p>
                      {userData && userData.skills ? userData.skills : null}
                    </p>
                  </div>
                  <div className="item">
                    <HatOutlineIcon /> <h4>Availability for training </h4>{" "}
                    <p>
                      {userData && userData.availability
                        ? userData.availability
                        : null}
                    </p>
                  </div>
                  <div className="item">
                    <MoneyIcon /> <h4>Type of training </h4>{" "}
                    <p>
                      {userData && userData.training_type
                        ? userData.training_type
                        : null}
                    </p>
                  </div>
                </div>
                <button
                  className={"dark-btn"}
                  onClick={openFormIfNotOpened}
                  style={{
                    WebkitTransform: `translate3d(0, ${
                      formOpened ? "50" : "0"
                    }%, 0)`,
                    transform: `translate3d(0, ${
                      formOpened ? "-50" : "0"
                    }%, 0)`,
                    opacity: ` ${formOpened ? "0" : "1"}`
                  }}
                >
                  INVITE ME To animate An ux session
                </button>
              </div>
              <div className="right">
                <Motion style={{ x: spring(formOpened ? 0 : 100) }}>
                  {({ x }) => (
                    <span className={"container-span-form"}>
                      <span
                        className={"container-of-form"}
                        style={{
                          WebkitTransform: `translateX(${x}%)`,
                          transform: `translateX(${x}%)`
                        }}
                      >
                        {formOpened ? <InviteTalentForm /> : null}
                      </span>
                    </span>
                  )}
                </Motion>

                <div className={"close-btn-round"} onClick={closePageOrGoBack}>
                  <div className={"arrow-container-go-back"}>
                    {" "}
                    <ArrowLeftBlack />{" "}
                  </div>
                  <svg
                    id={"ico-svg-back-plus"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.749"
                    height="18.749"
                    viewBox="0 0 18.749 18.749"
                  >
                    <path
                      id="Path_32"
                      data-name="Path 32"
                      d="M2.018-11.25l6.009-6.009L9.267-18.5a.469.469,0,0,0,0-.663L7.941-20.487a.469.469,0,0,0-.663,0L.029-13.239l-7.249-7.249a.469.469,0,0,0-.663,0l-1.327,1.326a.469.469,0,0,0,0,.663l7.249,7.249L-9.209-4a.469.469,0,0,0,0,.663l1.326,1.326a.469.469,0,0,0,.663,0L.029-9.261,6.039-3.252,7.278-2.013a.469.469,0,0,0,.663,0L9.267-3.339a.469.469,0,0,0,0-.663Z"
                      transform="translate(9.346 20.625)"
                      fill="#fc0"
                    />
                  </svg>
                </div>
                <div className="img-container">
                  <img
                    src={
                      userData.image
                        ? process.env.REACT_APP_STORAGE_URL + userData.image
                        : null
                    }
                    alt={
                      userData && userData.name ? userData.name + "img" : null
                    }
                  />
                </div>
              </div>
            </div>
          )}
        </Motion>
      )}
    </div>
  );
};

export default withRouter(ProfileTalentPage);
