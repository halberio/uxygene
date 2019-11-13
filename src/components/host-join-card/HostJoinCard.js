import React from 'react';
import "./host-join-card.scss"
import SpaceShip from "../svg/SpaceShip";
const HostJoinCard = () => {
    return (
        <div className={"host-join-card"}>
            <div className="left">
                <SpaceShip/>
            </div>
            <div className="right">
                <h2>Coworking space?</h2>
                <h3>Join us now !</h3>
            </div>
        </div>
    );
};

export default HostJoinCard;
