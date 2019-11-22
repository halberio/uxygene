import React from "react";
import "./join-us-card.scss";
import AndroidIcon from "../svg/AndroidIcon";
import { Link } from "react-router-dom";

const JoinUsCard = () => {
  return (
    <Link to={"/get-in-touch"} className={"join-us-card"}>
      <AndroidIcon />
      <div className="text-big">
        <h1>YOU</h1>
        <h2>UX TALENT?</h2>
      </div>
      <p className={"text-link-join"} to={"/get-in-touch"}>JOIN US NOW!</p>
    </Link>
  );
};

export default JoinUsCard;
