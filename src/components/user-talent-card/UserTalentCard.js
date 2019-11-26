import React, {  useState } from "react";
import "./user-talent-card.scss";
import { Link } from "react-router-dom";
const UserTalentCard = props => {
  const [loaded, setLoaded] = useState(false);

  const imgLoadedHandler = () => {
    setLoaded(true);
  };


  return (
    <Link
      to={"/talent-user/" + props.id}
      className="user-talent-card"
      style={{
        animationDelay: `${props.id * 0.14}s`,
        //border: `1px solid ${
          //colors[colors.length > 2 ? colors.length - colors.length + 2 : 0]
       // }`
      }}
    >
      <>
        <div className="picture-container">
          {props.image ? (
              <img
                  style={{
                    filter: `${loaded ? "blur(0)" : "blur(5px)"}`
                  }}
                  onLoad={imgLoadedHandler}
                  src={props.image}
                  alt={props.name + props.position}
              />
          ) : null}
        </div>
        {props.confirmed ? <div className="badge-container" /> : null}
        <div className="user-infos">
          <h3>{props.name}</h3>
          <h4>{props.position}</h4>
        </div>
      </>
    </Link>
  );
};

export default UserTalentCard;
