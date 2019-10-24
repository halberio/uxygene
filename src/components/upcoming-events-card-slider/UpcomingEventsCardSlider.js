import React from "react";
import "./upcoming-events-card-slider.scss";
import afficheImg from "../../assets/img/affiche.jpg";
import HatIcon from "../svg/HatIcon";
import LocationIcon from "../svg/LocationIcon";
import SmallAndroidIcon from "../svg/smallAndroidIcon";
import ArrowLeftBlack from "../svg/ArrowLeftBlack";
import ArrowRightBlack from "../svg/ArrowRightBlack";
const UpcomingEventsCardSlider = () => {
  return (
    <div className={"upcoming-events-card-slider"}>
      <h3>upcoming Ux event</h3>
      <img src={afficheImg} alt="" />
      <div className="content">
        <div className="text">
          <div className={"item"}>
            <span className="icon">
              <HatIcon />
            </span>
            <h4>You X Design</h4>
          </div>
          <div className={"item"}>
            <span className="icon">
              <LocationIcon />
            </span>
            <h5>Hive12 Coworking Space . October 12, 2019</h5>
          </div>
          <div className={"item"}>
            <span className="icon">
              <SmallAndroidIcon />
            </span>
            <h6>Mongi Ayouni</h6>
          </div>
        </div>
        <div className="free-or-paid">Free</div>
      </div>
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia
        lacus eget urna suscipit, ut convallis massa efficitur. Praesent
        pellentesque metus vel rhoncus auctor. Nunc quis varius augue. Proin in
        odio metus.
      </div>
      <div className="footer">
        <ArrowLeftBlack />
        <div className="dots">
          <div className="dot"></div>
          <div className="dot active"></div>
          <div className="dot"></div>
        </div>
        <ArrowRightBlack />
      </div>
    </div>
  );
};

export default UpcomingEventsCardSlider;
