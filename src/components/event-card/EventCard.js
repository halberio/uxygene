import React from "react";
import "./event-card.scss";

const EventCard = (props) => {
  return (
    <div className={"event-card"}>
      <div className="text">
        <h3 className={"title"}>How to get your first UX job?</h3>
        <h4 className={"date-place"}>
            {props.address ? props.address : null}
            {props.date ? props.date : null}
        </h4>
      </div>
      <div className="free-or-paid">{props.is_paied ? 'paied' :'free'}</div>
    </div>
  );
};

export default EventCard;
