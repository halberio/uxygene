import React from "react";
import "./events-page.scss";
import EventCard from "../../components/event-card/EventCard";
import UpcomingEventsCardSlider from "../../components/upcoming-events-card-slider/UpcomingEventsCardSlider";

const EventsPage = () => {
  return (
    <div className={"events-page"}>
      <div className="row-container">
        <div className="left">
          <UpcomingEventsCardSlider />
        </div>
        <div className="right">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
