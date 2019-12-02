import React, {useEffect, useState} from "react";
import "./user-talent-card.scss";
import { Link } from "react-router-dom";
const UserTalentCard = props => {
  const [loaded, setLoaded] = useState(false);

  const imgLoadedHandler = () => {
   setTimeout(()=>{
     setLoaded(true);
   },500)
  };

  useEffect(()=>{
      let isSubscribed = true;
      if(isSubscribed){
          if(loaded){
              clearTimeout();
          }
      }
      return ()=> isSubscribed = false;
  });

  return (
    <Link
      to={"/talent-user/" + props.id}
      className="user-talent-card"
      style={{
        animationDelay: `${props.idForanimation * 0.14}s`
      }}
    >

      <>
        <div className="picture-container"
             style={{
                background:loaded?"#232323":'#232323'
             }}>
          {props.image ? (
              <img
                  style={{
                      opacity:loaded ? 1 :0
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
