import React, { useEffect, useState } from "react";
import "./upcoming-events-card-slider.scss";
import HatIcon from "../svg/HatIcon";
import LocationIcon from "../svg/LocationIcon";
import SmallAndroidIcon from "../svg/smallAndroidIcon";
import ArrowLeftBlack from "../svg/ArrowLeftBlack";
import ArrowRightBlack from "../svg/ArrowRightBlack";
import axios from "axios";
import NoDataIcon from "../no-data-icon/NoDataIcon";
import LoadingIcon from "../loading-icon/LoadingIcon";
import ImgWithPropEffect from "./ImgWithPropEffect";
const UpcomingEventsCardSlider = () => {
  const [newEvents, setNewsEvents] = useState([]);
  const [item, setItem] = useState({});
  const [currentId, setCurrentId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const goNext = () => {
    if (currentId < newEvents.length - 1) {
      setCurrentId(currentId + 1);
    }
    if (currentId === newEvents.length - 1) {
      setCurrentId(0);
    }
  };
  const goPrev = () => {
    if (currentId > 0) {
      setCurrentId(currentId - 1);
    }
    if (currentId === 0) {
      setCurrentId(newEvents.length - 1);
    }
  };
  const setCurrentById = id => {
    setCurrentId(id);
  };
  useEffect(() => {
    setItem(newEvents[currentId]);
  }, [currentId, newEvents]);
  useEffect(() => {
    setIsLoading(true);
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
      {newEvents && newEvents.length > 0 ? (
        <div className={"container-item-event-last"}>
          <div className="img-container-slide-custom">
            <ImgWithPropEffect
              alt={item && item.name ? item.name : null}
              src={
                item && item.cover
                  ? process.env.REACT_APP_STORAGE_URL + item.cover
                  : null
              }
            />
          </div>
          <div className="content">
            <div className="text">
              <div className={"item"}>
                <span className="icon">
                  <HatIcon />
                </span>
                <h4>{item && item.name ? item.name : null}</h4>
              </div>
              <div className={"item"}>
                <span className="icon">
                  <LocationIcon />
                </span>
                <h5>
                  {item && item.address ? item.address : null} |{" "}
                  {item && item.date ? item.date : null}
                </h5>
              </div>
              <div className={"item"}>
                <span className="icon">
                  <SmallAndroidIcon />
                </span>
                <h6>{item && item.address ? item.address : null} </h6>
              </div>
            </div>
            <div className="free-or-paid">
              {item && item.is_paied
                ? item.is_paied
                  ? "paied"
                  : "free"
                : "free"}
            </div>
          </div>
          <div className="description">
            {item && item.description ? item.description : null}
          </div>
        </div>
      ) : isLoading ? (
        <LoadingIcon scale={0.4} />
      ) : (
        <NoDataIcon msg={"No upcoming events"} />
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
