import React from "react";
import "./filter-card.scss";
import AdjustIcon from "../svg/AdjustIcon";

const FilterCard = () => {
  return (
    <div className={"filter-card"}>
      <AdjustIcon />
      <h1>Display filter</h1>
    </div>
  );
};

export default FilterCard;
