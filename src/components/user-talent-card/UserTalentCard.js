import React from "react";
import "./user-talent-card.scss";
const UserTalentCard = props => {
  return (
    <div className={"user-talent-card"}>
      <div className="picture-container">
        <img src={props.picture} alt={props.name + props.position} />
      </div>
      {props.confirmed ? <div className="badge-container" /> : null}
      <div className="user-infos">
        <h3>{props.name}</h3>
        <h4>{props.position}</h4>
      </div>
    </div>
  );
};

export default UserTalentCard;
