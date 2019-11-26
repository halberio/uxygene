import React from "react";
import "./upcoming-events-card-slider.scss";
import HatIcon from "../svg/HatIcon";
import LocationIcon from "../svg/LocationIcon";
import SmallAndroidIcon from "../svg/smallAndroidIcon";
import ArrowLeftBlack from "../svg/ArrowLeftBlack";
import ArrowRightBlack from "../svg/ArrowRightBlack";
const UpcomingEventsCardSlider = (props) => {
  return (
    <div className={"upcoming-events-card-slider"}>
      <h3>upcoming Ux event</h3>
      <img src={props.cover ? props.cover:null} alt={props.name ? props.name:null} />
      <div className="content">
        <div className="text">
          <div className={"item"}>
            <span className="icon">
              <HatIcon />
            </span>
            <h4>{props.name ? props.name:null}</h4>
          </div>
          <div className={"item"}>
            <span className="icon">
              <LocationIcon />
            </span>
            <h5>{props.address ? props.address:null} | {props.date ? props.date:null}</h5>
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
