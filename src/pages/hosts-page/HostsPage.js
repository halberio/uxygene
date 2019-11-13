import React from 'react';
import './hosts-page.scss';
import AdjustIcon from "../../components/svg/AdjustIcon";
import SearchIcon from "../../components/svg/SearchIcon";
import HostCard from "../../components/host-card/HostCard";
import HostJoinCard from "../../components/host-join-card/HostJoinCard";
const HostsPage = () => {
    return (
        <div className={"hosts-page"}>
            <div className="navigation-filters-container">
                <div className="coworking-filter">
                    <h3>Coworking space</h3>
                    <AdjustIcon />
                </div>
                <div className="search-box">
                    <SearchIcon/>
                    <h3>Type anywhere To search</h3>
                </div>
            </div>
            <div className="hosts-container">
                <HostJoinCard/>
                <HostCard/>
                <HostCard/>
                <HostCard/>
                <HostCard/>
                <HostCard/>
                <HostCard/>
                <HostCard/>
            </div>
        </div>
    );
};

export default HostsPage;
