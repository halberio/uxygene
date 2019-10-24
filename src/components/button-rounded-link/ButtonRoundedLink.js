import React from "react";
import "./button-rounded-link.scss";
import { Link } from "react-router-dom";
import ArrowRight from "../svg/ArrowRight";

const ButtonRoundedLink = props => {
  return (
    <Link to={props.linkTo} className={"button-rounded-link"}>
      <span>{props.btnText}</span>
      <ArrowRight />
    </Link>
  );
};

export default ButtonRoundedLink;
