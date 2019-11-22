import React from "react";
import "./profile-host-page.scss";
import ConfirmedBadge from "../../components/svg/ConfirmedBadge";
import SpaceShip from "../../components/svg/SpaceShip";
import {Form} from "antd";
import TextArea from "antd/es/input/TextArea";
import imgCogite from "../../assets/img/cogit.jpg"
import ArrowLeftBlack from "../../components/svg/ArrowLeftBlack";
import ArrowRightBlack from "../../components/svg/ArrowRightBlack";
const ProfileHostForm = props => {
    const { getFieldDecorator } = props.form;
  return (
    <div className={"profile-host-page"}>
        <div className="row-container">
            <div className="left">
                <div className="top">
                    <div className="title">
                        <h1>Hive 12</h1>
                        <h2>Coworking Space</h2>
                    </div>
                    <div className="confirmed-box">
                        <h3>Confirmed</h3>
                        <ConfirmedBadge />
                    </div>
                </div>
                <p className="description">
                    We are a young actor who wants to be an intermediary between young
                    talents and the job market. Our structure is based on two key
                    principles: pooling and collaboration. The idea is simple to bring
                    together so many young talents to supervise and support them and to
                    grow solid startups at the point of spa technology. Our vocation is to
                    encourage meetings, exchanges and collaboration, to create a synergy
                    conducive to the emergence of projects.
                </p>
                <div className="bottom">
                    <SpaceShip />
                    <h3>Public vote on hosting quality </h3>
                    <button className={"vote-button"}>
                        UPVote <span>124</span>
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
                <img src={imgCogite} alt={"corgit"}/>
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
        </div>
    </div>
  );
};
const ProfileHostPage = Form.create({ name: "normal_login" })(ProfileHostForm);
export default ProfileHostPage;
