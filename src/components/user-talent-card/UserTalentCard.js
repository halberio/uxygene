import React from "react";
import "./user-talent-card.scss";
import {Link} from "react-router-dom";
const UserTalentCard = props => {
  return (
    <Link to={"/talent-user/"+props.id}  className={"user-talent-card"} style={{
        animationDelay:`${props.id * 0.15}s`
    }}>

        <div className="picture-container">
            {props.image?  <img src={props.image} alt={props.name + props.position} /> :null}
        </div>
        {props.confirmed ? <div className="badge-container" /> : null}
        <div className="user-infos">
          <h3>{props.name}</h3>
          <h4>{props.position}</h4>
        </div>
    </Link>
  );
};

export default UserTalentCard;
