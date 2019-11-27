import React, {useEffect} from "react";
import "./events-page.scss";
import EventCard from "../../components/event-card/EventCard";
import UpcomingEventsCardSlider from "../../components/upcoming-events-card-slider/UpcomingEventsCardSlider";
import {useDispatch, useSelector} from "react-redux";
import LoadingIcon from "../../components/loading-icon/LoadingIcon";
import {getEvents} from "../../actions/events-actions/actions";

const EventsPage = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.eventsReducer.events);
  const isLoadingEvents = useSelector(state => state.hostsReducer.isLoadingEvents);
  useEffect(() => {
    dispatch(getEvents());



  }, [dispatch]);
  return (
    <div className={"events-page"}>
      <div className="row-container">
        <div className="left">
          <UpcomingEventsCardSlider  />
        </div>
        <div className="right">

          {events && events.length > 0 ? (
                  events.map(item => (

                      <EventCard
                      key={item.id}
                      id={item.id}
                      cover={item.image ? process.env.REACT_APP_STORAGE_URL+item.cover : null}
                      is_paied={item.is_paied}
                      name={item.name}
                      description={item.description}
                      address={item.address}
                  />
              ))
          ) : (
              <div className="loading-flex-fixed">
                <LoadingIcon scale={.5}/>
              </div>
          )}
          {!isLoadingEvents && events &&  events.length < 1 ? <p>No Events records</p> : null }
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
