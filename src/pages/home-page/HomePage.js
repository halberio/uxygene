import React from "react";
import "./home-page.scss";
import LightBigX from "../../components/svg/LighBigX";
import ButtonRoundedLink from "../../components/button-rounded-link/ButtonRoundedLink";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="row-container">
        <div className="left">
          <h4 className="light">WE ARE THE FIRST</h4>
          <h1 className="big">USER</h1>
          <h1 className="big">EXPERIENCE</h1>
          <h3 className="dark">CAMP / tunisia</h3>
          <p className={"sub-title-p"}>
            First Tunisian online platform bringing{" "}
            <strong> UX Design Experts </strong> from their
            <strong> Community </strong> and organizes events and meetings for
            them.
          </p>
          <div className="buttons-container">
            <ButtonRoundedLink linkTo={"/talents"} btnText={"Find UX Talent"} />
            <ButtonRoundedLink linkTo={"/events"} btnText={"Find UX Event"} />
          </div>
        </div>
        <div className="right">
          <LightBigX />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
