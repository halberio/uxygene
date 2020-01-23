import React, { useEffect } from "react";
import "./result-search-events-page.scss";
import SearchCard from "../../components/search-card/SearchCard";
import NoDataIcon from "../../components/no-data-icon/NoDataIcon";
import LoadingIcon from "../../components/loading-icon/LoadingIcon";
import { useDispatch, useSelector } from "react-redux";
import { searchEvents } from "../../actions/events-actions/actions";
import EventCard from "../../components/event-card/EventCard";
import { useParams } from "react-router-dom";
import { clearEvents } from "../../actions/events-actions/actions";
const ResultSearchEventsPage = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.eventsReducer.events);
  const isLoadingHosts = useSelector(
    state => state.hostsReducer.isLoadingHosts
  );
  const { name } = useParams();

  useEffect(() => {
    if (name) {
      dispatch(clearEvents());
      dispatch(searchEvents(name));
    } else {
      dispatch(searchEvents());
    }
  }, [dispatch, name]);
  return (
    <div className={"result-search-hosts-page"}>
      <div className="max-width-container">
        <div className="row-container">
          <div className="top-elements">
            <div className="text-title-of-search">
              <h1>You are searching for</h1>
              <h2>
                {name ? name : null} <span>/ UX Events</span>
              </h2>
              <p>
                We got {events && events.length ? events.length : 0} results
                matching your request.
              </p>
            </div>
            <SearchCard />
          </div>
          <div className="results-list">
            {events && events.length > 0 ? (
              events.map((item, index) => (
                <EventCard
                  key={index}
                  name={item.name}
                  address={item.address}
                  date={item.date}
                />
              ))
            ) : events && events.length === 0 && !isLoadingHosts ? (
              <NoDataIcon msg={"No UX hosts yet!"} />
            ) : (
              <div className="loading-flex-fixed">
                <LoadingIcon scale={0.5} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSearchEventsPage;
