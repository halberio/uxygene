import React, {useEffect} from "react";
import "./events-page.scss";
import EventCard from "../../components/event-card/EventCard";
import UpcomingEventsCardSlider from "../../components/upcoming-events-card-slider/UpcomingEventsCardSlider";
import {useDispatch, useSelector} from "react-redux";
import LoadingIcon from "../../components/loading-icon/LoadingIcon";
import {getEvents} from "../../actions/events-actions/actions";
import NoDataIcon from "../../components/no-data-icon/NoDataIcon";
import {Helmet} from "react-helmet";

const EventsPage = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.eventsReducer.events);
  const isLoadingEvents = useSelector(state => state.hostsReducer.isLoadingEvents);
  useEffect(() => {
    dispatch(getEvents());



  }, [dispatch]);
  return (
    <div className={"events-page"}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>uxygène | UX Events</title>
        <link rel="canonical" href="http://uxygène.org/events" />
        <meta name="description" content="uxygène | Events : user experience camp"/>
      </Helmet>
      <div className="row-container">
        <div className="left">
          <UpcomingEventsCardSlider  />
        </div>
        <div className="right">

          {events && events.length > 0 && !isLoadingEvents ? (
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
          ) :  !isLoadingEvents && !events ? (
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
