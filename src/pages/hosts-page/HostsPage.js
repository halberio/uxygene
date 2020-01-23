import React, { useEffect, useRef, useState } from "react";
import "./hosts-page.scss";
import AdjustIcon from "../../components/svg/AdjustIcon";
import HostCard from "../../components/host-card/HostCard";
import HostJoinCard from "../../components/host-join-card/HostJoinCard";
import "../../components/filter-card/filter-card.scss";
import { Motion, spring } from "react-motion";
import SearchCard from "../../components/search-card/SearchCard";
import { useDispatch, useSelector } from "react-redux";
import LoadingIcon from "../../components/loading-icon/LoadingIcon";
import {
  clearHosts,
  getHosts,
  getHostsWithFilter
} from "../../actions/hosts-actions/actions";
import NoDataIcon from "../../components/no-data-icon/NoDataIcon";
import { Helmet } from "react-helmet";
import { getHostsCategories } from "../../actions/host-categories-actions/actions";

const HostsPage = () => {
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFiler] = useState("");
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isFilterItemsActive, setIsFilterItemsActive] = useState(false);
  const hosts = useSelector(state => state.hostsReducer.hosts);
  const host_categories = useSelector(
    state => state.hostCategoriesReducer.host_categories
  );
  const isLoadingHostsCategories = useSelector(
    state => state.hostCategoriesReducer.isLoadingHostsCategories
  );
  const isLoadingHosts = useSelector(
    state => state.hostsReducer.isLoadingHosts
  );
  const formRefUL = useRef();
  const ResetFilter = async () => {
    await dispatch(clearHosts());
    await dispatch(getHosts());
    setSelectedFiler("");
    if (formRefUL) {
      if (formRefUL.current) {
        formRefUL.current.reset();
      }
    }
  };
  useEffect(() => {
    (async () => {
      await dispatch(getHostsCategories());
      dispatch(getHosts());
    })();
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
  const handleFilterHosts = async categorySelected => {
    await dispatch(clearHosts());
    closeFilterWherever();
    dispatch(getHostsWithFilter([categorySelected.value]));
    setSelectedFiler(categorySelected.name);
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
    <div className={"hosts-page"}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>uxygène | UX Hosts</title>
        <link rel="canonical" href="http://uxygene.org/hosts" />
        <meta
          name="description"
          content="uxygène | Hosts : user experience camp"
        />
      </Helmet>
      <div className="navigation-filters-container">
        <div
          className={`filter-card coworking-filter ${
            isFilterActive ? "coworking-filter active" : null
          }`}
        >
          <h1 onClick={handleFilterStatus}>
            {" "}
            {isFilterActive
              ? "Filter view by"
              : selectedFilter.length > 1
              ? `Filter applied: ${selectedFilter}`
              : "Display Filter"}
          </h1>
          {selectedFilter.length > 1 ? (
            <button onClick={ResetFilter} className={"reset-btn"}>
              Reset
            </button>
          ) : null}
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
              })
            }}
          >
            {({ scale, opacity, translate }) => (
              <div
                className="list-filter"
                onMouseLeave={closeFilterWherever}
                style={{
                  WebkitTransform: `scaleY(${scale}`,
                  transform: `scaleY(${scale}`
                }}
              >
                <form ref={formRefUL} action="#">
                  {!isLoadingHostsCategories ? (
                    <ul className={"fade-in-element"}>
                      {host_categories.map(category => (
                        <li
                          key={category.id}
                          style={{
                            opacity: opacity,
                            transform: `translateY(${translate}px`
                          }}
                        >
                          <input
                            onChange={() =>
                              handleFilterHosts({
                                value: category.id,
                                name: category.name
                              })
                            }
                            type="radio"
                            id={`${category.id}id`}
                            name="hostcategoriesradio"
                            value={category.id}
                          />
                          <label htmlFor={`${category.id}id`}>
                            {category.name}
                          </label>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <LoadingIcon scale={0.2} />
                  )}
                </form>
              </div>
            )}
          </Motion>
        </div>
        <SearchCard />
      </div>
      <div className="hosts-container">
        <HostJoinCard />
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
  );
};

export default HostsPage;
