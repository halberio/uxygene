import React, { useEffect, useState } from "react";
import "./talents-page.scss";
import SearchCard from "../../components/search-card/SearchCard";
import UserTalentCard from "../../components/user-talent-card/UserTalentCard";
import { useDispatch, useSelector } from "react-redux";
import { getTalents } from "../../actions/talents-actions/actions";
import LoadingIcon from "../../components/loading-icon/LoadingIcon";
import AdjustIcon from "../../components/svg/AdjustIcon";
import "../../components/filter-card/filter-card.scss";
import { Motion, spring } from "react-motion";
import JoinUsCard from "../../components/join-us-card/JoinUsCard";
import NoDataIcon from "../../components/no-data-icon/NoDataIcon";
import { Helmet } from "react-helmet";
const TalentsPage = () => {
  const dispatch = useDispatch();
  const talents = useSelector(state => state.talentsReducer.talents);
  const isLoadingTalents = useSelector(
    state => state.talentsReducer.isLoadingTalents
  );
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isFilterItemsActive, setIsFilterItemsActive] = useState(false);
  useEffect(() => {
    dispatch(getTalents());
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
    }, 300);
  };
  return (
    <div className={"talents-page"}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>uxygène | UX Talents</title>
        <link rel="canonical" href="http://uxygène.org/talents" />
        <meta
          name="description"
          content="uxygène | Talents : user experience camp"
        />
      </Helmet>
      <div className={"columns-container"}>
        <div className={`filter-card ${isFilterActive ? "active" : null}`}>
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
              translate4,
              translate5
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
                      onChange={closeFilterWherever}
                      type="radio"
                      id={"uxdesignercheckbox"}
                      name="uxtalentradio"
                      value="uxdesigner"
                    />
                    <label htmlFor={"uxdesignercheckbox"}>Ux designer</label>
                  </li>
                  <li
                    style={{
                      opacity: opacity,
                      transform: `translateY(${translate2}px`
                    }}
                  >
                    <input
                      onChange={closeFilterWherever}
                      type="radio"
                      id={"uidesignercheckbox"}
                      name="uxtalentradio"
                      value="uidesigner"
                    />
                    <label htmlFor={"uidesignercheckbox"}>Ui designer</label>
                  </li>
                  <li
                    style={{
                      opacity: opacity,
                      transform: `translateY(${translate3}px`
                    }}
                  >
                    {" "}
                    <input
                      onChange={closeFilterWherever}
                      type="radio"
                      id={"uxwritercheckbox"}
                      name="uxtalentradio"
                      value="uwriter"
                    />
                    <label htmlFor={"uxwritercheckbox"}>UX writer</label>
                  </li>
                  <li
                    style={{
                      opacity: opacity,
                      transform: `translateY(${translate4}px`
                    }}
                  >
                    <input
                      onChange={closeFilterWherever}
                      type="radio"
                      id={"illustratorcheckbox"}
                      name="uxtalentradio"
                      value="illustrator"
                    />
                    <label htmlFor={"illustratorcheckbox"}>illustrator</label>
                  </li>
                  <li
                    style={{
                      opacity: opacity,
                      transform: `translateY(${translate5}px`
                    }}
                  >
                    <input
                      onChange={closeFilterWherever}
                      type="radio"
                      id={"motiondesignercheckbox"}
                      name="uxtalentradio"
                      value="motiondesigner"
                    />
                    <label htmlFor={"motiondesignercheckbox"}>
                      Motion designer
                    </label>
                  </li>
                </ul>
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
        ) : !isLoadingTalents && !talents ? (
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
