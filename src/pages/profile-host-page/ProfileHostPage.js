import React, { useEffect, useState } from "react";
import "./profile-host-page.scss";
import ConfirmedBadge from "../../components/svg/ConfirmedBadge";
import SpaceShip from "../../components/svg/SpaceShip";
import { Form, Icon, message, Spin } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import LoadingIcon from "../../components/loading-icon/LoadingIcon";
import CarouselUx from "../../components/carousel-ux/CarouselUx";
import ArrowLeftBlack from "../../components/svg/ArrowLeftBlack";
import { useDispatch, useSelector } from "react-redux";
import { hostVote } from "../../actions/hosts-actions/actions";
const ProfileHostForm = props => {
  const [hostData, setHostData] = useState({});
  const [isLoadingData, setIsloadingData] = useState(true);
  const [formOpened, setFormOpened] = useState(false);
  const [hostVotes, setHostVotes] = useState(0);
  const [isUpadingVotes, setIsUpadingVotes] = useState(false);
  const user = useSelector(state => state.authReducer.user);
  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);
  const { getFieldDecorator } = props.form;
  const dispatch = useDispatch();
  const showMessage = () => {
    message.success("Your message was sent! Thank you");
  };
  useEffect(() => {
    setIsloadingData(true);
    if (user && isLoggedIn) {
      (async () => {
        if (user) {
          axios
            .get(
              `${process.env.REACT_APP_API_URL}/hosts/${props.match.params.id}?user_id=${user.id}`
            )
            .then(function(response) {
              setHostData(response.data);
              setIsloadingData(false);
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      })();
    } else {
      (async () => {
        axios
          .get(
            `${process.env.REACT_APP_API_URL}/hosts/${props.match.params.id}`
          )
          .then(function(response) {
            setHostData(response.data);
            setIsloadingData(false);
          })
          .catch(function(error) {
            console.log(error);
          });
      })();
    }
  }, [props.match.params.id, user, isLoggedIn]);

  const closePageOrGoBack = () => {
    if (!formOpened) {
      props.history.push("/hosts");
    } else {
      setFormOpened(false);
    }
  };

  const voteHandler = async talentId => {
    if (isLoggedIn && user) {
      if (hostData) {
        const body = {
          host_id: talentId,
          user_id: user.id
        };
        setIsUpadingVotes(true);
        await dispatch(hostVote(body));
        if (hostVotes.voted_by_me) {
          setHostVotes({
            votes: hostVotes.votes - 1,
            voted_by_me: false
          });
          setIsUpadingVotes(false);
        } else {
          setHostVotes({
            votes: hostVotes.votes + 1,
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
    setHostVotes({
      votes: hostData.votes_count,
      voted_by_me: hostData.voted_by_me
    });
  }, [hostData]);

  const antIcon = <Icon type="loading" size={"small"} spin />;
  return (
    <div className={"profile-host-page"}>
      {isLoadingData ? (
        <LoadingIcon scale={0.4} />
      ) : (
        <div className="row-container">
          <div className="left">
            <div className="top">
              <div className="title">
                <h1>{hostData && hostData.name ? hostData.name : null}</h1>
                <h2>{hostData && hostData.title ? hostData.title : null}</h2>
              </div>
              <div className="confirmed-box">
                <span>
                  {hostData && hostData.is_confirmed ? "confirmed" : null}
                </span>

                {hostData && hostData.is_confirmed ? <ConfirmedBadge /> : null}
              </div>
            </div>
            <p className="description">
              {hostData && hostData.about ? hostData.about : null}
            </p>
            <div className="bottom">
              <SpaceShip />
              <h3>Public vote on hosting quality </h3>
              <button
                className={"vote-btn"}
                onClick={() => voteHandler(hostData.id)}
              >
                {hostData && hostVotes.voted_by_me ? "DOWNVOTE " : "UPVOTE "}
                <span className="number">
                  {hostData ? hostVotes.votes : null}{" "}
                  {isUpadingVotes ? <Spin indicator={antIcon} /> : null}
                </span>
              </button>
            </div>
            <Form className="form-host">
              <Form.Item>
                {getFieldDecorator("name", {
                  rules: [
                    { required: true, message: "Please input your suggestion!" }
                  ]
                })(<TextArea rows={7} placeholder={""} />)}
              </Form.Item>
              <button onClick={showMessage} className={"submit-btn-host"}>
                <span>suggest a UX event</span>
              </button>
            </Form>
          </div>
          <div className="right">
            {hostData &&
            hostData.host_pictures &&
            hostData.host_pictures.length > 0 ? (
              <CarouselUx pictures={hostData.host_pictures} />
            ) : (
              <CarouselUx
                pictures={[{ image_path: hostData.cover, id: "index" }]}
              />
            )}
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
          </div>
        </div>
      )}
    </div>
  );
};
const ProfileHostPage = Form.create({ name: "normal_login" })(ProfileHostForm);
export default ProfileHostPage;
