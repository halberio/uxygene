import React, { useEffect, useState } from "react";
import "./upcoming-events-card-slider.scss";
import HatIcon from "../svg/HatIcon";
import LocationIcon from "../svg/LocationIcon";
import SmallAndroidIcon from "../svg/smallAndroidIcon";
import ArrowLeftBlack from "../svg/ArrowLeftBlack";
import ArrowRightBlack from "../svg/ArrowRightBlack";
import axios from "axios";
const UpcomingEventsCardSlider = () => {
  const [newEvents, setNewsEvents] = useState([]);
  const [item, setItem] = useState({});
  const [currentId, setCurrentId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const goNext = () => {
    if (currentId < newEvents.length - 1) {
      setCurrentId(currentId + 1);
    }
      if(currentId===newEvents.length-1){
          setCurrentId(0);
      }
  };
  const goPrev = () => {
    if (currentId > 0) {
      setCurrentId(currentId - 1);
    }
    if(currentId===0){
        setCurrentId(newEvents.length-1);
    }
  };
  const setCurrentById = id => {
      setCurrentId(id);
  };
  useEffect(() => {
    setItem(newEvents[currentId]);
  }, [currentId,newEvents]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/last-event")
      .then(function(response) {
        setNewsEvents(response.data.data);
        setItem(response.data.data[currentId]);
        setIsLoading(false);
      })
      .catch(function(error) {
        setIsLoading(false);
      });
  }, [currentId]);
  return (
    <div className={"upcoming-events-card-slider"}>
      <h3>upcoming Ux event</h3>
      {newEvents && newEvents.length > 0 && !isLoading ? (
        <div className={"container-item-event-last"} key={item.id}>
          <div className="img-container-slide-custom">
            <img
              src={
                item.cover
                  ? process.env.REACT_APP_STORAGE_URL + item.cover
                  : null
              }
              alt={item.name ? item.name : null}
            />
          </div>
          <div className="content">
            <div className="text">
              <div className={"item"}>
                <span className="icon">
                  <HatIcon />
                </span>
                <h4>{item.name ? item.name : null}</h4>
              </div>
              <div className={"item"}>
                <span className="icon">
                  <LocationIcon />
                </span>
                <h5>
                  {item.address ? item.address : null} |{" "}
                  {item.date ? item.date : null}
                </h5>
              </div>
              <div className={"item"}>
                <span className="icon">
                  <SmallAndroidIcon />
                </span>
                <h6>{item.address ? item.address : null} </h6>
              </div>
            </div>
            <div className="free-or-paid">Free</div>
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            lacinia lacus eget urna suscipit, ut convallis massa efficitur.
            Praesent pellentesque metus vel rhoncus auctor. Nunc quis varius
            augue. Proin in odio metus.
          </div>
        </div>
      ) : (
        <h1>Is loading...</h1>
      )}

      <div className="footer">
        {newEvents && newEvents.length > 0 ? (
          <div className="navigation-items-carousel-ux">
            <button className={"nav-svg-arrow-btn"} onClick={goPrev}>
              <ArrowLeftBlack />
            </button>
            <div className="dots-cont">
              {newEvents.length > 1
                ? newEvents.map((item, index) => (
                    <span
                      key={index}
                      onClick={() => setCurrentById(index)}
                      className={index === currentId ? "dot filled" : "dot"}
                    ></span>
                  ))
                : null}
            </div>
            <button className={"nav-svg-arrow-btn"} onClick={goNext}>
              <ArrowRightBlack />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UpcomingEventsCardSlider;
