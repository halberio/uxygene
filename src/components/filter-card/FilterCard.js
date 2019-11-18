import React from "react";
import "./filter-card.scss";
import AdjustIcon from "../svg/AdjustIcon";

const FilterCard = () => {
  return (
    <div className={"filter-card"}>
        <h1>Display filter</h1>
      <AdjustIcon />
    </div>
  );
};

export default FilterCard;
