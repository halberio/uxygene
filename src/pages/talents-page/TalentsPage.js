import React, {useEffect, useState} from "react";
import "./talents-page.scss";
import SearchCard from "../../components/search-card/SearchCard";
import UserTalentCard from "../../components/user-talent-card/UserTalentCard";
import user1 from "../../assets/img/users/user1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions/users-actions/actions";
import LoadingIcon from "../../components/loading-icon/LoadingIcon";
import AdjustIcon from "../../components/svg/AdjustIcon";
import "../../components/filter-card/filter-card.scss";
import {Motion, spring} from 'react-motion';
const TalentsPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.usersReducer.users);
  const isLoadingUsers = useSelector(state => state.usersReducer.isLoadingUsers);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isFilterItemsActive, setIsFilterItemsActive] = useState(false);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleFilterStatus = ()=>{
    if(isFilterItemsActive){
      setIsFilterItemsActive(false);
      setTimeout(()=>{
        setIsFilterActive(false)
      },180)
    }else{
      setIsFilterActive(true);
      setTimeout(()=>{
        setIsFilterItemsActive(true)
      },190)
    }
  }
  return (
    <div className={"talents-page"}>
      <div className={"columns-container"} >
        <div  className={`filter-card ${isFilterActive ? "active": null}` }>
          <h1 onClick={handleFilterStatus}> {isFilterActive ? 'Filter view by' :"Display filter"}</h1>
         <span onClick={handleFilterStatus}><AdjustIcon /></span>

          <Motion style={{scale: spring(isFilterActive ? 1 : 0) ,
            opacity :spring(isFilterItemsActive ? 1 :0),
            translate :spring(isFilterItemsActive ? 0 :-15),
            translate2 :spring(isFilterItemsActive ? 0 :-20),
            translate3 :spring(isFilterItemsActive ? 0 :-25),
            translate4 :spring(isFilterItemsActive ? 0 :-30),
            translate5 :spring(isFilterItemsActive ? 0 :-45),

          }}>
            {({scale, opacity,translate,translate2,translate3,translate4,translate5}) =>
                <div className="list-filter"
                     style={{
                       WebkitTransform: `scaleY(${scale}`,
                       transform: `scaleY(${scale}`,
                     }}
                >
                  <ul>
                    <li style={{
                      opacity: opacity,
                      transform: `translateY(${translate}px`,
                    }}>
                      <input
                          type="checkbox"
                          id={"uxdesignercheckbox"}
                          name="uxdesigner"
                          value="uxdesigner"
                      />
                      <label htmlFor={"uxdesignercheckbox"}>Ux designer</label>
                    </li>
                    <li  style={{
                      opacity: opacity,
                      transform: `translateY(${translate2}px`,
                    }}>
                      <input
                          type="checkbox"
                          id={"uidesignercheckbox"}
                          name="uidesigner"
                          value="uidesigner"
                      />
                      <label htmlFor={"uidesignercheckbox"}>Ui designer</label>
                    </li>
                    <li  style={{
                      opacity: opacity,
                      transform: `translateY(${translate3}px`,
                    }}>
                      {" "}
                      <input
                          type="checkbox"
                          id={"uxwritercheckbox"}
                          name="uwriter"
                          value="uwriter"
                      />
                      <label htmlFor={"uxwritercheckbox"}>UX writer</label>
                    </li>
                    <li  style={{
                      opacity: opacity,
                      transform: `translateY(${translate4}px`,
                    }}>
                      <input
                          type="checkbox"
                          id={"illustratorcheckbox"}
                          name="illustrator"
                          value="illustrator"
                      />
                      <label htmlFor={"illustratorcheckbox"}>illustrator</label>
                    </li>
                    <li  style={{
                      opacity: opacity,
                      transform: `translateY(${translate5}px`,
                    }}>
                      <input
                          type="checkbox"
                          id={"motiondesignercheckbox"}
                          name="motiondesigner"
                          value="motiondesigner"
                      />
                      <label htmlFor={"motiondesignercheckbox"}>
                        Motion designer
                      </label>
                    </li>
                  </ul>
                </div>
            }
          </Motion>
        </div>
        <SearchCard />
        {users && users.length > 0 ? (
          users.map(item => (
            <UserTalentCard
                key={item.id}
              id={item.id}
              image={item.image ? process.env.REACT_APP_STORAGE_URL+item.image : null}
              confirmed={item.is_confirmed}
              name={item.name}
              position={item.title}
            />
          ))
        ) : (
          <LoadingIcon />
        )}
        {!isLoadingUsers && users &&  users.length < 1 ? <p>No Talents records</p> : null }


      </div>
    </div>
  );
};

export default TalentsPage;
