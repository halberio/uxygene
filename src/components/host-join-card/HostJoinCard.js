import React from 'react';
import "./host-join-card.scss"
import SpaceShip from "../svg/SpaceShip";
import {Link} from "react-router-dom";
const HostJoinCard = () => {
    return (
        <Link to={"get-in-touch"} className={"host-join-card"}>
            <div className="left">
                <SpaceShip/>
            </div>
            <div className="right">
                <h2>Coworking space?</h2>
                <h3>Join us now !</h3>
            </div>

        </Link>
    );
};

export default HostJoinCard;
