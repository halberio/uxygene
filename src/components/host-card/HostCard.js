import React from "react";
import "./host-card.scss";
import cogitePic from "../../assets/img/cogit.jpg";
import procogit from "../../assets/img/procogite.jpg";
import ArrowRight from "../svg/ArrowRight";
import LocationIcon from "../svg/LocationIcon";
import { Link } from "react-router-dom";

const HostCard = (props) => {
  return (
      <Link  to={"/hosts-profile/" + props.id} className={"host-card"} style={{
        animationDelay:`${props.id * 0.15}s`
      }}>
        <div className="images-container">
          {props.cover?  <img  className={"img-bg"} src={props.cover} alt={props.name + props.title +"cover"} /> :null}
          <div className="profile-image">
            {props.image?  <img src={props.image} alt={props.name + props.title} /> :null}
          </div>
        </div>
        <div className="text-container">
          <div className="top">
            <h3>{props.name ? props.name : null}</h3>
            <button className={"arrow-button"}>
              <ArrowRight />
            </button>
          </div>
          <div className="bottom">
            <LocationIcon />
            <p>{props.address ? props.address : null}</p>
          </div>
        </div>
        <div className="infos-block">
          <div className="left">
            <h4>Opening Hours</h4>
            <ul>
              <li>
                <h5> Mon-Fri</h5>
                <p>9:00 am - 8:00 pm</p>
              </li>
              <li>
                <h5> Sat-Sun</h5>
                <p> Closed</p>
              </li>
            </ul>
          </div>
          <div className="left">
            <h4>UX Events</h4>
            <ul>
              <li>
                <h5> Maitriser Adobbe XD</h5>
                <p>October 12, 2019</p>
              </li>
              <li>
                <h5> Public Speaking: Best Practices</h5>
                <p> November 26, 2019</p>
              </li>
            </ul>
          </div>
        </div>
      </Link>
  );
};

export default HostCard;
