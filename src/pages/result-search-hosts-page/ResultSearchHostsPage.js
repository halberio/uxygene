import React, { useEffect } from "react";
import "./result-search-hosts-page.scss";
import SearchCard from "../../components/search-card/SearchCard";
import NoDataIcon from "../../components/no-data-icon/NoDataIcon";
import LoadingIcon from "../../components/loading-icon/LoadingIcon";
import { useDispatch, useSelector } from "react-redux";
import HostCard from "../../components/host-card/HostCard";
import { getHosts } from "../../actions/hosts-actions/actions";

const ResultSearchHostsPage = () => {
  const dispatch = useDispatch();
  const hosts = useSelector(state => state.hostsReducer.hosts);
  const isLoadingHosts = useSelector(
    state => state.hostsReducer.isLoadingHosts
  );
  useEffect(() => {
    dispatch(getHosts());
  }, [dispatch]);
  return (
    <div className={"result-search-hosts-page"}>
      <div className="max-width-container">
        <div className="row-container">
          <div className="top-elements">
            <div className="text-title-of-search">
              <h1>You are searching for</h1>
              <h2>
                Hamdi <span>/ UX Host</span>
              </h2>
              <p>We got 4 result matching your request.</p>
            </div>
            <SearchCard />
          </div>
          <div className="results-list">
            {hosts && hosts.length > 0 ? (
              hosts.map((item, index) => (
                <HostCard
                  idForanimation={index}
                  key={item.id}
                  id={item.id}
                  image={
                    item.image
                      ? process.env.REACT_APP_STORAGE_URL + item.image
                      : null
                  }
                  cover={
                    item.image
                      ? process.env.REACT_APP_STORAGE_URL + item.cover
                      : null
                  }
                  confirmed={item.is_confirmed}
                  name={item.name}
                  title={item.title}
                  about={item.about}
                  address={item.address}
                />
              ))
            ) : hosts && hosts.length === 0 && !isLoadingHosts ? (
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

export default ResultSearchHostsPage;
