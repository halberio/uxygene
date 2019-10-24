import React from "react";
import "./talents-page.scss";
import JoinUsCard from "../../components/join-us-card/JoinUsCard";
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
const TalentsPage = () => {
  return (
    <div className={"talents-page"}>
      <div className={"columns-container"}>
        <JoinUsCard />
        <UserTalentCard
          picture={user1}
          confirmed={false}
          name={"User Name"}
          position={"UI/UX Designer"}
        />
        <UserTalentCard
          picture={user2}
          confirmed={true}
          name={"User Name"}
          position={"UI/UX Designer"}
        />
        <UserTalentCard
          picture={user3}
          confirmed={true}
          name={"User Name"}
          position={"UI/UX Designer"}
        />
        <FilterCard />
        <UserTalentCard
          picture={hamdiPic}
          confirmed={true}
          name={"Hamdi Jomaa"}
          position={"CEO Halber.io"}
        />
        <UserTalentCard
          picture={user4}
          confirmed={false}
          name={"User Name"}
          position={"UI/UX Designer"}
        />

        <UserTalentCard
          picture={user5}
          confirmed={true}
          name={"User Name"}
          position={"UI/UX Designer"}
        />
        <UserTalentCard
          picture={mongiPic}
          confirmed={true}
          name={"Mongi Ayouni"}
          position={"CEO Moon.tn"}
        />
        <UserTalentCard
          picture={weldmoon}
          confirmed={true}
          name={"User Name"}
          position={"UI/UX Designer"}
        />
        <UserTalentCard
          picture={user6}
          confirmed={false}
          name={"User Name"}
          position={"UI/UX Designer"}
        />
        <UserTalentCard
          picture={user7}
          confirmed={false}
          name={"User Name"}
          position={"UI/UX Designer"}
        />

        <SearchCard />
        <UserTalentCard
          picture={user8}
          confirmed={false}
          name={"User Name"}
          position={"UI/UX Designer"}
        />

        <UserTalentCard
          picture={user9}
          confirmed={false}
          name={"User Name"}
          position={"UI/UX Designer"}
        />
        <UserTalentCard
          picture={user10}
          confirmed={false}
          name={"User Name"}
          position={"UI/UX Designer"}
        />
      </div>
    </div>
  );
};

export default TalentsPage;
