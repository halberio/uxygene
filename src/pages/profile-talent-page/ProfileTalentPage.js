import React, { useEffect, useState } from "react";
import "./profile-talent-page.scss";
import { Spin, Icon, message } from "antd";
import ConfirmedBadge from "../../components/svg/ConfirmedBadge";
import { withRouter } from "react-router-dom";
import axios from "axios";
import LoadingIcon from "../../components/loading-icon/LoadingIcon";
import { Motion, spring } from "react-motion";
import ArrowLeftBlack from "../../components/svg/ArrowLeftBlack";
import InviteTalentForm from "../../components/invite-talent-form/InviteTalentForm";
import { useDispatch, useSelector } from "react-redux";
import { talentVote } from "../../actions/talents-actions/actions";
import BatrieIcon from "../../components/svg/BatrieIcon";
import HatOutlineIcon from "../../components/svg/HatOutlineIcon";
import AndroidOutlineSvg from "../../components/svg/AndroidOutlineIcon";
import MoneyIcon from "../../components/svg/MoneyIcon";
const ProfileTalentPage = props => {
  const [talentData, setTalentData] = useState({});
  const [isLoadingData, setIsloadingData] = useState(true);
  const [formOpened, setFormOpened] = useState(false);
  const [isUpadingVotes, setIsUpadingVotes] = useState(false);
  const [userVotes, setUserVotes] = useState({
    votes: 0,
    voted_by_me: false
  });
  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer.user);
  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);
  useEffect(() => {
    setIsloadingData(true);
    if (user && isLoggedIn) {
      (async () => {
        await axios
          .get(
            `${process.env.REACT_APP_API_URL}/talents/${props.match.params.id}?user_id=${user.id}`
          )
          .then(function(response) {
            setTalentData(response.data);
            setIsloadingData(false);
          })
          .catch(function(error) {
            console.log(error);
          });
      })();
    } else {
      (async () => {
        await axios
          .get(
            `${process.env.REACT_APP_API_URL}/talents/${props.match.params.id}`
          )
          .then(function(response) {
            setTalentData(response.data);
            setIsloadingData(false);
          })
          .catch(function(error) {
            console.log(error);
          });
      })();
    }
  }, [props.match.params.id, isLoggedIn, user]);

  const closePageOrGoBack = () => {
    if (!formOpened) {
      props.history.push("/talents");
    } else {
      setFormOpened(false);
    }
  };

  const openFormIfNotOpened = () => {
    if (isLoggedIn) {
      setFormOpened(true);
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, 400);
    } else {
      message.warning("You should be logged in to make this request :)", 3);
    }
  };

  const voteHandler = async talentId => {
    if (isLoggedIn && user) {
      if (talentData) {
        const body = {
          talent_id: talentId,
          user_id: user.id
        };
        setIsUpadingVotes(true);
        await dispatch(talentVote(body));
        if (userVotes.voted_by_me) {
          setUserVotes({
            votes: userVotes.votes - 1,
            voted_by_me: false
          });
          setIsUpadingVotes(false);
        } else {
          setUserVotes({
            votes: userVotes.votes + 1,
            voted_by_me: true
          });
          setIsUpadingVotes(false);
        }
      }
    } else {
      message.warning("You should be logged in to make a vote :)", 3);
      setTimeout(() => {
        props.history.push("/let-me-in");
      }, 3200);
    }
  };

  useEffect(() => {
    setUserVotes({
      votes: talentData.votes_count,
      voted_by_me: talentData.voted_by_me
    });
  }, [talentData]);

  const antIcon = <Icon type="loading" size={"small"} spin />;
  return (
    <div className={"user-talent-profile-page"}>
      {isLoadingData ? (
        <LoadingIcon scale={0.4} />
      ) : (
        <Motion style={{ grayScaleValue: spring(isLoadingData ? 90 : 0) }}>
          {({ grayScaleValue }) => (
            <div
              className="row-container"
              style={{
                filter: `grayscale(${grayScaleValue}%)`
              }}
            >
              <div className="left">
                <div className="top">
                  <div className="user-infos">
                    <h1>
                      {talentData && talentData.name ? talentData.name : null}
                    </h1>
                    <h2>
                      {talentData && talentData.title ? talentData.title : null}
                    </h2>
                  </div>
                  <div className="confirmed-container">
                    <span>
                      {talentData && talentData.is_confirmed
                        ? "confirmed"
                        : null}
                    </span>

                    {talentData && talentData.is_confirmed ? (
                      <ConfirmedBadge />
                    ) : null}
                  </div>
                </div>
                <div className="content">
                  <p>
                    {talentData && talentData.about ? talentData.about : null}
                  </p>
                </div>
                <div className="bottom-elements">
                  <div className="items-list">
                    <div className="item">
                      <AndroidOutlineSvg />{" "}
                      <h4>Public vote on training skills </h4>{" "}
                      {talentData && talentData.id ? (
                        <button
                          onClick={() => voteHandler(talentData.id)}
                          className={"vote-btn"}
                        >
                          {talentData && userVotes.voted_by_me
                            ? "DOWNVOTE "
                            : "UPVOTE "}
                          <span className="number">
                            {talentData ? userVotes.votes : null}{" "}
                            {isUpadingVotes ? (
                              <Spin indicator={antIcon} />
                            ) : null}
                          </span>
                        </button>
                      ) : null}
                    </div>
                    <div className="item">
                      <BatrieIcon /> <h4>Skills </h4>{" "}
                      <p>
                        {talentData && talentData.skills
                          ? talentData.skills
                          : null}
                      </p>
                    </div>
                    <div className="item">
                      <HatOutlineIcon /> <h4>Availability for training </h4>{" "}
                      <p>
                        {talentData && talentData.availability
                          ? talentData.availability
                          : null}
                      </p>
                    </div>
                    <div className="item">
                      <MoneyIcon /> <h4>Type of training </h4>{" "}
                      <p>
                        {talentData && talentData.training_type
                          ? talentData.training_type
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
                        <InviteTalentForm
                          talent_id={
                            talentData && talentData.id ? talentData.id : null
                          }
                        />
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
                      talentData.image
                        ? process.env.REACT_APP_STORAGE_URL + talentData.image
                        : null
                    }
                    alt={
                      talentData && talentData.name
                        ? talentData.name + "img"
                        : null
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
