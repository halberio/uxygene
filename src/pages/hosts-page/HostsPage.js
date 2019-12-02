import React, { useEffect, useState } from "react";
import "./hosts-page.scss";
import AdjustIcon from "../../components/svg/AdjustIcon";
import HostCard from "../../components/host-card/HostCard";
import HostJoinCard from "../../components/host-join-card/HostJoinCard";
import "../../components/filter-card/filter-card.scss";
import { Motion, spring } from "react-motion";
import SearchCard from "../../components/search-card/SearchCard";
import { useDispatch, useSelector } from "react-redux";
import LoadingIcon from "../../components/loading-icon/LoadingIcon";
import { getHosts } from "../../actions/hosts-actions/actions";
import NoDataIcon from "../../components/no-data-icon/NoDataIcon";
import { Helmet } from "react-helmet";
const HostsPage = () => {
  const dispatch = useDispatch();

  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isFilterItemsActive, setIsFilterItemsActive] = useState(false);
  const hosts = useSelector(state => state.hostsReducer.hosts);
  const isLoadingHosts = useSelector(
    state => state.hostsReducer.isLoadingHosts
  );

  useEffect(() => {
    dispatch(getHosts());
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
    }, 500);
  };

  return (
    <div className={"hosts-page"}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>uxygène | UX Hosts</title>
        <link rel="canonical" href="http://uxygène.org/hosts" />
          <meta name="description" content="uxygène | Hosts : user experience camp"/>
      </Helmet>
      <div className="navigation-filters-container">
        <div
          className={`filter-card coworking-filter ${
            isFilterActive ? "coworking-filter active" : null
          }`}
        >
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
              translate4
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
                      type="radio"
                      id={"coworkingspacecheckbox"}
                      name="uxhostsradio"
                      value="coworkingspace"
                    />
                    <label htmlFor={"coworkingspacecheckbox"}>
                      Coworking space
                    </label>
                  </li>
                  <li
                    style={{
                      opacity: opacity,
                      transform: `translateY(${translate2}px`
                    }}
                  >
                    <input
                      type="radio"
                      id={"universitycheckbox"}
                      name="uxhostsradio"
                      value="university"
                    />
                    <label htmlFor={"universitycheckbox"}>University</label>
                  </li>
                  <li
                    style={{
                      opacity: opacity,
                      transform: `translateY(${translate3}px`
                    }}
                  >
                    {" "}
                    <input
                      type="radio"
                      id={"academycentercheckbox"}
                      name="uxhostsradio"
                      value="academycenter"
                    />
                    <label htmlFor={"academycentercheckbox"}>
                      Academy center
                    </label>
                  </li>
                  <li
                    style={{
                      opacity: opacity,
                      transform: `translateY(${translate4}px`
                    }}
                  >
                    <input
                      type="radio"
                      id={"ongcheckbox"}
                      name="uxhostsradio"
                      value="ong"
                    />
                    <label htmlFor={"ongcheckbox"}>Ong</label>
                  </li>
                </ul>
              </div>
            )}
          </Motion>
        </div>
        <SearchCard />
      </div>
      <div className="hosts-container">
        <HostJoinCard />
        {hosts && hosts.length > 0 ? (
          hosts.map((item,index) => (
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
        ) : !isLoadingHosts && !hosts ? (
          <NoDataIcon msg={"No UX hosts yet!"} />
        ) : (
          <div className="loading-flex-fixed">
            <LoadingIcon scale={0.5} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HostsPage;
