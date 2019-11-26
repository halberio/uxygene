import React, {useEffect, useState} from "react";
import "./profile-host-page.scss";
import ConfirmedBadge from "../../components/svg/ConfirmedBadge";
import SpaceShip from "../../components/svg/SpaceShip";
import {Form} from "antd";
import TextArea from "antd/es/input/TextArea";
import ArrowLeftBlack from "../../components/svg/ArrowLeftBlack";
import ArrowRightBlack from "../../components/svg/ArrowRightBlack";
import axios from "axios";
import LoadingIcon from "../../components/loading-icon/LoadingIcon";
const ProfileHostForm = props => {
    const [hostData, setHostData] = useState({});
    const [isLoadingData, setIsloadingData] = useState(true);
    const [formOpened, setFormOpened] = useState(false);
    const { getFieldDecorator } = props.form;
    useEffect(() => {
        setIsloadingData(true);
        axios
            .get(process.env.REACT_APP_API_URL + "/hosts/" + props.match.params.id)
            .then(function(response) {
                setHostData(response.data);
                setIsloadingData(false);
            })
            .catch(function(error) {
                console.log(error);
            });
    }, [props.match.params.id]);
  return (
    <div className={"profile-host-page"}>
        {isLoadingData ? <LoadingIcon scale={.4}/> :   <div className="row-container">
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

                        {hostData && hostData.is_confirmed ? (
                            <ConfirmedBadge />
                        ) : null}
                    </div>
                </div>
                <p className="description">
                    {hostData && hostData.about ? hostData.about : null}
                </p>
                <div className="bottom">
                    <SpaceShip />
                    <h3>Public vote on hosting quality </h3>
                    <button className={"vote-button"}>
                        UPVote <span> {hostData && hostData.votes ? hostData.votes : null}</span>
                    </button>
                </div>
                <Form className="form-host">
                    <Form.Item>
                        {getFieldDecorator("name", {
                            rules: [{ required: true, message: "Please input your suggestion!" }]
                        })(
                            <TextArea rows={7} placeholder={""} />
                        )}
                    </Form.Item>
                    <button className={"submit-btn-host"}>suggest a UX event</button>
                </Form>
            </div>
            <div className="right">
                <img  src={
                    hostData.cover
                        ? process.env.REACT_APP_STORAGE_URL + hostData.cover
                        : null
                }
                      alt={
                          hostData && hostData.name ? hostData.name + "img" : null
                      }/>
                <div className="navigation-items">
                    <ArrowLeftBlack/>
                    <div className="dots">
                        <span className="dot"></span>
                        <span className="dot filled"></span>
                        <span className="dot"></span>
                    </div>
                    <ArrowRightBlack/>
                </div>
            </div>
        </div>}
    </div>
  );
};
const ProfileHostPage = Form.create({ name: "normal_login" })(ProfileHostForm);
export default ProfileHostPage;
