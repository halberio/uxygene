import React from "react";
import "./event-card.scss";

const EventCard = () => {
  return (
    <div className={"event-card"}>
      <div className="text">
        <h3 className={"title"}>How to get your first UX job?</h3>
        <h4 className={"date-place"}>
          Université Centrale de Tunis . October 12, 2019
        </h4>
      </div>
      <div className="free-or-paid">Free</div>
    </div>
  );
};

export default EventCard;
