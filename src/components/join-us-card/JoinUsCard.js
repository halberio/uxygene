import React from "react";
import "./join-us-card.scss";
import AndroidIcon from "../svg/AndroidIcon";
import ArrowRightBlack from "../svg/ArrowRightBlack";
import { Link } from "react-router-dom";
const JoinUsCard = () => {
  return (
    <div className={"join-us-card"}>
      <AndroidIcon />
      <div className="text-big">
        <h1>YOU</h1>
        <h2>UX TALENT?</h2>
      </div>
      <p id={"text-j1"} className={"text-link-join"} to={"/get-in-touch"}>
        JOIN US NOW!
      </p>
      <div className={"text-form-j2"}>
        <p className={"text-link-join"} to={"/get-in-touch"}>
          Please fill out our form
        </p>
        <Link to={"/g-form"}>
          <ArrowRightBlack />
        </Link>
      </div>
    </div>
  );
};

export default JoinUsCard;
