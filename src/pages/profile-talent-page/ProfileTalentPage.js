import React from "react";
import "./profile-talent-page.scss";
import ConfirmedBadge from "../../components/svg/ConfirmedBadge";
import HatIcon from "../../components/svg/HatIcon";
import ArrowRight from "../../components/svg/ArrowRight";
import mongiPic from "../../assets/img/users/mongi.jpg";
import {Link} from "react-router-dom";
const ProfileTalentPage = props => {
  return (
    <div className={"user-talent-profile-page"}>
      <div className="left">
        <div className="top">
          <div className="user-infos">
            <h1>MONGI AYOUNI</h1>
            <h2>Experience Director</h2>
          </div>
          <div className="confirmed-container">
            <span>Confirmed</span>
            <ConfirmedBadge />
          </div>
        </div>
        <div className="content">
          <p>
            Mongi AYOUNI, Fondateur et Experience Director @ Moon Studio
            (www.moon.tn), l’Agence 100% Full-UX services basée à Sousse et
            connectée à l’international. Moon Studio orchestre des projets de
            grande valeur pour Amazon, Linkedin et d’autres startups réputées.
            Ancien Creatif Director chez Wezign Agence interactive (2010-2019).
          </p>
        </div>
        <div className="footer">
          <div className="item">
            <HatIcon /> <h4>Public vote on training skills </h4>{" "}
            <button>
              UPVOTE <span className="number">124</span>
            </button>
          </div>
          <div className="item">
            <HatIcon /> <h4>Skills </h4>{" "}
            <p>UX . UI . Creative Confidence . Sprint Design</p>
          </div>
          <div className="item">
            <HatIcon /> <h4>Availability for training </h4>{" "}
            <p>Saturdays and Sundays only</p>
          </div>
          <div className="item">
            <HatIcon /> <h4>Type of training </h4> <p>Free / Paid</p>
          </div>
          <div className="item">
            <HatIcon /> <h4>Next training event </h4>{" "}
            <div className="next-btns">
              <p>October 12, 2019</p>{" "}
              <button>
                GO <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <button className={"dark-btn"}>
          INVITE ME To animate A ux session
        </button>
      </div>
      <div className="right">
        <Link to={"/talents"} className={"close-btn-round"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18.749"
            height="18.749"
            viewBox="0 0 18.749 18.749"
          >
            <path
              id="Path_32"
              data-name="Path 32"
              d="M2.018-11.25l6.009-6.009L9.267-18.5a.469.469,0,0,0,0-.663L7.941-20.487a.469.469,0,0,0-.663,0L.029-13.239l-7.249-7.249a.469.469,0,0,0-.663,0l-1.327,1.326a.469.469,0,0,0,0,.663l7.249,7.249L-9.209-4a.469.469,0,0,0,0,.663l1.326,1.326a.469.469,0,0,0,.663,0L.029-9.261,6.039-3.252,7.278-2.013a.469.469,0,0,0,.663,0L9.267-3.339a.469.469,0,0,0,0-.663Z"
              transform="translate(9.346 20.625)"
              fill="#fc0"
            />
          </svg>
        </Link>
        <img src={mongiPic} />
      </div>
    </div>
  );
};

export default ProfileTalentPage;
