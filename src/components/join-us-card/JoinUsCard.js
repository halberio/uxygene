import React from "react";
import "./join-us-card.scss";
import AndroidIcon from "../svg/AndroidIcon";
import { Link } from "react-router-dom";

const JoinUsCard = () => {
  return (
    <div className={"join-us-card"}>
      <AndroidIcon />
      <div className="text-big">
        <h1>YOU</h1>
        <h2>UX TALENT?</h2>
      </div>
      <Link to={"/"}>JOIN US NOW!</Link>
    </div>
  );
};

export default JoinUsCard;
