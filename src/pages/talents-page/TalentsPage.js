import React, {useEffect, useState} from "react";
import "./talents-page.scss";
import FilterCard from "../../components/filter-card/FilterCard";
import SearchCard from "../../components/search-card/SearchCard";
import UserTalentCard from "../../components/user-talent-card/UserTalentCard";
import user1 from "../../assets/img/users/user1.jpg";
import user2 from "../../assets/img/users/user2@2x.jpg";
import user3 from "../../assets/img/users/user3@2x.jpg";
import user4 from "../../assets/img/users/user4@2x.jpg";
import user5 from "../../assets/img/users/user5@2x.jpg";
import user6 from "../../assets/img/users/user6@2x.jpg";
import user7 from "../../assets/img/users/user7@2x.jpg";
import user8 from "../../assets/img/users/user8@2x.jpg";
import user9 from "../../assets/img/users/user9@2x.jpg";
import user10 from "../../assets/img/users/user10@2x.jpg";
import hamdiPic from "../../assets/img/users/hamdi@2x.jpg";
import weldmoon from "../../assets/img/users/weldmoon@2x.jpg";
import mongiPic from "../../assets/img/users/mongi@2x.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions/users-actions/actions";
import LoadingIcon from "../../components/loading-icon/LoadingIcon";
import AdjustIcon from "../../components/svg/AdjustIcon";
import "../../components/filter-card/filter-card.scss";
const TalentsPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.usersReducer.users);
  const [isFilterActive, setIsFilterActive] = useState(false);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleFilterStatus = ()=>{
    setIsFilterActive(!isFilterActive)
  }
  return (
    <div className={"talents-page"}>
      <div className={"columns-container"} >
        <div  className={`filter-card ${isFilterActive ? "active": null}` }>
          <h1 onClick={handleFilterStatus}> {isFilterActive ? 'Filter view by' :"Display filter"}</h1>
         <span onClick={handleFilterStatus}><AdjustIcon /></span>
          <div className="list-filter">
            <ul>
              <li>
                <input
                  type="checkbox"
                  id={"uxdesignercheckbox"}
                  name="uxdesigner"
                  value="uxdesigner"
                />
                <label htmlFor={"uxdesignercheckbox"}>Ux designer</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id={"uidesignercheckbox"}
                  name="uidesigner"
                  value="uidesigner"
                />
                <label htmlFor={"uidesignercheckbox"}>Ui designer</label>
              </li>
              <li>
                {" "}
                <input
                  type="checkbox"
                  id={"uxwritercheckbox"}
                  name="uwriter"
                  value="uwriter"
                />
                <label htmlFor={"uxwritercheckbox"}>UX writer</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id={"illustratorcheckbox"}
                  name="illustrator"
                  value="illustrator"
                />
                <label htmlFor={"illustratorcheckbox"}>illustrator</label>
              </li>
              <li>
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
        </div>
        <SearchCard />
        {users && users.length > 0 ? (
          users.map(item => (
            <UserTalentCard
              id={"1"}
              picture={user1}
              confirmed={false}
              name={"User Name"}
              position={"UI/UX Designer"}
            />
          ))
        ) : (
          <LoadingIcon />
        )}

        {/*
         <UserTalentCard
          id={"1"}
          picture={user2}
          confirmed={true}
          name={"User Name"}
          position={"UI/UX Designer"}
        />
        <UserTalentCard
          id={"1"}
          picture={user3}
          confirmed={true}
          name={"User Name 3"}
          position={"UI/UX Designer"}
        />
        <UserTalentCard
          id={"1"}
          picture={hamdiPic}
          confirmed={true}
          name={"Hamdi Jomaa"}
          position={"CEO Halber.io"}
        />
        <UserTalentCard
          id={"1"}
          picture={user4}
          confirmed={false}
          name={"User Name"}
          position={"UI/UX Designer"}
        />

        <UserTalentCard
          picture={user5}
          id={"1"}
          confirmed={true}
          name={"User Name"}
          position={"UI/UX Designer"}
        />
        <UserTalentCard
          picture={mongiPic}
          confirmed={true}
          id={"1"}
          name={"Mongi Ayouni"}
          position={"CEO Moon.tn"}
        />
        <UserTalentCard
          picture={weldmoon}
          confirmed={true}
          id={"1"}
          name={"User Name"}
          position={"UI/UX Designer"}
        />
        <UserTalentCard
          picture={user6}
          confirmed={false}
          id={"1"}
          name={"User Name"}
          position={"UI/UX Designer"}
        />
        <UserTalentCard
          picture={user7}
          confirmed={false}
          id={"1"}
          name={"User Name"}
          position={"UI/UX Designer"}
        />

        <UserTalentCard
          picture={user8}
          id={"1"}
          confirmed={false}
          name={"User Name"}
          position={"UI/UX Designer"}
        />

        <UserTalentCard
          picture={user9}
          confirmed={false}
          name={"User Name"}
          position={"UI/UX Designer"}
          id={"1"}
        />
        <UserTalentCard
          picture={user10}
          confirmed={false}
          id={"1"}
          name={"User Name"}
          position={"UI/UX Designer"}
        />
         */}
      </div>
    </div>
  );
};

export default TalentsPage;
