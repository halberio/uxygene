import React, { useEffect } from "react";
import "./result-search-talents-page.scss";
import SearchCard from "../../components/search-card/SearchCard";
import { getTalents } from "../../actions/talents-actions/actions";
import UserTalentCard from "../../components/user-talent-card/UserTalentCard";
import NoDataIcon from "../../components/no-data-icon/NoDataIcon";
import LoadingIcon from "../../components/loading-icon/LoadingIcon";
import { useDispatch, useSelector } from "react-redux";

const ResultSearchTalentsPage = () => {
  const dispatch = useDispatch();
  const talents = useSelector(state => state.talentsReducer.talents);
  const isLoadingTalents = useSelector(
    state => state.talentsReducer.isLoadingTalents
  );
  useEffect(() => {
    dispatch(getTalents());
  }, [dispatch]);
  return (
    <div className={"result-search-talents-page"}>
      <div className="max-width-container">
        <div className="row-container">
          <div className="top-elements">
            <div className="text-title-of-search">
              <h1>You are searching for</h1>
              <h2>
                Hamdi <span>/ UX Talent</span>
              </h2>
              <p>We got 4 result matching your request.</p>
            </div>
            <SearchCard />
          </div>
          <div className="results-list">
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
      </div>
    </div>
  );
};

export default ResultSearchTalentsPage;
