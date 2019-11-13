import React from "react";
import "./user-talent-card.scss";
import {Link} from "react-router-dom";
const UserTalentCard = props => {
  return (
    <Link to={"/talent-user/"+props.id}>
      <div className={"user-talent-card"} >
        <div className="picture-container">
          <img src={props.picture} alt={props.name + props.position} />
        </div>
        {props.confirmed ? <div className="badge-container" /> : null}
        <div className="user-infos">
          <h3>{props.name}</h3>
          <h4>{props.position}</h4>
        </div>
      </div>
    </Link>
  );
};

export default UserTalentCard;
