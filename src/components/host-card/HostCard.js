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
          <img src={cogitePic} className={"img-bg"} alt="img bg" />
          <div className="profile-image">
            <img src={procogit} alt={"image profile"} />
          </div>
        </div>
        <div className="text-container">
          <div className="top">
            <h3>Cogite</h3>
            <button className={"arrow-button"}>
              <ArrowRight />
            </button>
          </div>
          <div className="bottom">
            <LocationIcon />
            <p>1, Place Tahar Haddad, Les Berges du lac, Tunis 1053</p>
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
