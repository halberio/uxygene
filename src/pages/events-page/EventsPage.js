import React, { useEffect, useState } from "react";
import "./events-page.scss";
import EventCard from "../../components/event-card/EventCard";
import UpcomingEventsCardSlider from "../../components/upcoming-events-card-slider/UpcomingEventsCardSlider";
import { useDispatch, useSelector } from "react-redux";
import LoadingIcon from "../../components/loading-icon/LoadingIcon";
import { getEvents } from "../../actions/events-actions/actions";
import NoDataIcon from "../../components/no-data-icon/NoDataIcon";
import { Helmet } from "react-helmet";
import AdjustIcon from "../../components/svg/AdjustIcon";
import { Motion, spring } from "react-motion";

const EventsPage = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.eventsReducer.events);
  const isLoadingEvents = useSelector(
    state => state.hostsReducer.isLoadingEvents
  );
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isFilterItemsActive, setIsFilterItemsActive] = useState(false);
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const handleFilterStatus = () => {
    if (isFilterItemsActive) {
      setIsFilterItemsActive(false);
      setTimeout(() => {
        setIsFilterActive(false);
      }, 80);
    } else {
      setIsFilterActive(true);
      setTimeout(() => {
        setIsFilterItemsActive(true);
      }, 130);
    }
  };

  const closeFilterWherever = () => {
    setTimeout(() => {
      if (isFilterItemsActive) {
        setTimeout(() => {
          setIsFilterItemsActive(false);
          setTimeout(() => {
            setIsFilterActive(false);
          }, 80);
        }, 130);
      }
    }, 300);
  };
  return (
    <div className={"events-page"}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>uxygène | UX Events</title>
        <link rel="canonical" href="http://uxygène.org/events" />
        <meta
          name="description"
          content="uxygène | Events : user experience camp"
        />
      </Helmet>
      <div className="row-container">
        <div className="left">
          <UpcomingEventsCardSlider />
        </div>
        <div className="right">
          {/*<div className={`filter-card ${isFilterActive ? "active" : null}`}>
            <h1 onClick={handleFilterStatus}>
              {" "}
              {isFilterActive ? "Filter view by" : "Display filter"}
            </h1>
            <span onClick={handleFilterStatus}>
              <AdjustIcon />
            </span>

            <Motion
              style={{
                scale: spring(isFilterActive ? 1 : 0, {
                  stiffness: 60,
                  damping: 10
                }),
                opacity: spring(isFilterItemsActive ? 1 : 0, {
                  stiffness: 60,
                  damping: 10
                }),
                translate: spring(isFilterItemsActive ? 0 : -15, {
                  stiffness: 60,
                  damping: 10
                }),
                translate2: spring(isFilterItemsActive ? 0 : -20, {
                  stiffness: 60,
                  damping: 10
                }),
                translate3: spring(isFilterItemsActive ? 0 : -25, {
                  stiffness: 60,
                  damping: 10
                }),
                translate4: spring(isFilterItemsActive ? 0 : -30, {
                  stiffness: 60,
                  damping: 10
                }),
                translate5: spring(isFilterItemsActive ? 0 : -45, {
                  stiffness: 60,
                  damping: 10
                })
              }}
            >
              {({
                scale,
                opacity,
                translate,
                translate2,
                translate3,
                translate4,
                translate5
              }) => (
                <div
                  className="list-filter"
                  onMouseLeave={closeFilterWherever}
                  style={{
                    WebkitTransform: `scaleY(${scale}`,
                    transform: `scaleY(${scale}`
                  }}
                >
                  <ul>
                    <li
                      style={{
                        opacity: opacity,
                        transform: `translateY(${translate}px`
                      }}
                    >
                      <input
                        onChange={closeFilterWherever}
                        type="radio"
                        id={"uxdesignercheckbox"}
                        name="uxtalentradio"
                        value="uxresearch"
                      />
                      <label htmlFor={"uxdesignercheckbox"}>UX Reserach</label>
                    </li>
                    <li
                      style={{
                        opacity: opacity,
                        transform: `translateY(${translate2}px`
                      }}
                    >
                      <input
                        onChange={closeFilterWherever}
                        type="radio"
                        id={"uidesignercheckbox"}
                        name="uxtalentradio"
                        value="uidesign"
                      />
                      <label htmlFor={"uidesignercheckbox"}>Ui design</label>
                    </li>
                    <li
                      style={{
                        opacity: opacity,
                        transform: `translateY(${translate3}px`
                      }}
                    >
                      {" "}
                      <input
                        onChange={closeFilterWherever}
                        type="radio"
                        id={"uxwritercheckbox"}
                        name="uxtalentradio"
                        value="interactiondesign"
                      />
                      <label htmlFor={"uxwritercheckbox"}>
                        Interaction Design
                      </label>
                    </li>
                    <li
                      style={{
                        opacity: opacity,
                        transform: `translateY(${translate4}px`
                      }}
                    >
                      <input
                        onChange={closeFilterWherever}
                        type="radio"
                        id={"illustratorcheckbox"}
                        name="uxtalentradio"
                        value="designthinking"
                      />
                      <label htmlFor={"illustratorcheckbox"}>
                        Design thinking
                      </label>
                    </li>
                    <li
                      style={{
                        opacity: opacity,
                        transform: `translateY(${translate5}px`
                      }}
                    >
                      <input
                        onChange={closeFilterWherever}
                        type="radio"
                        id={"motiondesignercheckbox"}
                        name="uxtalentradio"
                        value="uxwriting"
                      />
                      <label htmlFor={"motiondesignercheckbox"}>
                        UX Writing
                      </label>
                    </li>
                  </ul>
                </div>
              )}
            </Motion>
          </div>*/}
          {events && events.length > 0 && !isLoadingEvents ? (
            events.map(item => (
              <EventCard
                key={item.id}
                id={item.id}
                cover={
                  item.image
                    ? process.env.REACT_APP_STORAGE_URL + item.cover
                    : null
                }
                is_paied={item.is_paied}
                name={item.name}
                description={item.description}
                address={item.address}
              />
            ))
          ) : (!isLoadingEvents && !events) ||
            (!isLoadingEvents && events.length === 0) ? (
            <NoDataIcon msg={"No UX Events yet!"} />
          ) : (
            <div className="loading-flex-fixed">
              <LoadingIcon scale={0.5} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
