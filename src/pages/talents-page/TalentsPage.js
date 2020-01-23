import React, { useEffect, useState, useRef } from "react";
import "./talents-page.scss";
import SearchCard from "../../components/search-card/SearchCard";
import UserTalentCard from "../../components/user-talent-card/UserTalentCard";
import { useDispatch, useSelector } from "react-redux";
import {
  clearTalents,
  getTalents,
  getTalentsWithFilter
} from "../../actions/talents-actions/actions";
import LoadingIcon from "../../components/loading-icon/LoadingIcon";
import AdjustIcon from "../../components/svg/AdjustIcon";
import "../../components/filter-card/filter-card.scss";
import { Motion, spring } from "react-motion";
import JoinUsCard from "../../components/join-us-card/JoinUsCard";
import NoDataIcon from "../../components/no-data-icon/NoDataIcon";
import { Helmet } from "react-helmet";
import { getUxCategories } from "../../actions/ux-categories-actions/actions";
const TalentsPage = () => {
  const dispatch = useDispatch();
  const talents = useSelector(state => state.talentsReducer.talents);
  const [selectedFilter, setSelectedFiler] = useState("");
  const ux_categories = useSelector(
    state => state.uxCategoriesReducer.ux_categories
  );
  const isLoadingUXCategories = useSelector(
    state => state.uxCategoriesReducer.isLoadingUXCategories
  );
  const isLoadingTalents = useSelector(
    state => state.talentsReducer.isLoadingTalents
  );
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isFilterItemsActive, setIsFilterItemsActive] = useState(false);
  useEffect(() => {
    (async () => {
      await dispatch(getUxCategories());
      dispatch(getTalents());
    })();
  }, [dispatch]);

  const formRefUL = useRef();
  const ResetFilter = async () => {
    await dispatch(clearTalents());
    await dispatch(getTalents());
    setSelectedFiler("");
    if (formRefUL) {
      if (formRefUL.current) {
        formRefUL.current.reset();
      }
    }
  };
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
  const handleFilterTalents = async categorySelected => {
    await dispatch(clearTalents());
    dispatch(getTalentsWithFilter([categorySelected.value]));
    closeFilterWherever();
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
    <div className={"talents-page"}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>uxygène | UX Talents</title>
        <link rel="canonical" href="http://uxygene.org/talents" />
        <meta
          name="description"
          content="uxygène | Talents : user experience camp"
        />
      </Helmet>
      <div className={"columns-container"}>
        <div className={`filter-card ${isFilterActive ? "active" : null}`}>
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
                  {!isLoadingUXCategories ? (
                    <ul className={"fade-in-element"}>
                      {ux_categories.map((category, index) => (
                        <li
                          key={category.id}
                          style={{
                            opacity: opacity,
                            transform: `translateY(${translate}px`,
                            animationDelay: `${0.3 * index}s`
                          }}
                        >
                          <input
                            onChange={() =>
                              handleFilterTalents({
                                value: category.id,
                                name: category.name
                              })
                            }
                            type="radio"
                            id={`${category.id}id`}
                            name="uxcategoriesradio"
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
        <JoinUsCard />
        {talents && talents.length > 0 ? (
          talents.map((item, index) => (
            <UserTalentCard
              key={item.id}
              id={item.id}
              idForanimation={index}
              image={
                item.image
                  ? process.env.REACT_APP_STORAGE_URL + item.image
                  : null
              }
              confirmed={item.is_confirmed}
              name={item.name}
              position={item.title}
            />
          ))
        ) : !isLoadingTalents && !talents.length > 0 ? (
          <NoDataIcon msg={"No UX talents yet!"} />
        ) : (
          <div className="loading-flex-fixed">
            <LoadingIcon scale={0.5} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TalentsPage;
