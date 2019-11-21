import React, {useState} from 'react';
import './hosts-page.scss';
import AdjustIcon from "../../components/svg/AdjustIcon";
import SearchIcon from "../../components/svg/SearchIcon";
import HostCard from "../../components/host-card/HostCard";
import HostJoinCard from "../../components/host-join-card/HostJoinCard";
import "../../components/filter-card/filter-card.scss";
const HostsPage = () => {
    const [isFilterActive, setIsFilterActive] = useState(false);

    const handleFilterStatus = ()=>{
        setIsFilterActive(!isFilterActive)
    }
    return (
        <div className={"hosts-page"}>
            <div className="navigation-filters-container">
                <div  className={`filter-card coworking-filter ${isFilterActive ? "active": null}` }>
                    <h1 onClick={handleFilterStatus}> {isFilterActive ? 'Filter view by' :"Display filter"}</h1>
                    <span onClick={handleFilterStatus}><AdjustIcon /></span>
                    <div className="list-filter">
                        <ul>
                            <li>
                                <input
                                    type="checkbox"
                                    id={"coworkingspacecheckbox"}
                                    name="coworkingspace"
                                    value="coworkingspace"
                                />
                                <label htmlFor={"coworkingspacecheckbox"}>Coworking space</label>
                            </li>

                            <li>
                                {" "}
                                <input
                                    type="checkbox"
                                    id={"universitycheckbox"}
                                    name="university"
                                    value="university"
                                />
                                <label htmlFor={"universitycheckbox"}>University</label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    id={"academycentercheckbox"}
                                    name="academycenter"
                                    value="academycenter"
                                />
                                <label htmlFor={"academycentercheckbox"}>Academy center</label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    id={"ongcheckbox"}
                                    name="ong"
                                    value="ong"
                                />
                                <label htmlFor={"ongcheckbox"}>
                                    Ong
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="search-box">
                    <SearchIcon/>
                    <h3>Type anywhere To search</h3>
                </div>
            </div>
            <div className="hosts-container">
                <HostJoinCard/>
                <HostCard id={1}/>
                <HostCard id={1}/>
                <HostCard id={1}/>
                <HostCard id={1}/>
                <HostCard id={1}/>
                <HostCard id={1}/>
                <HostJoinCard/>
                <HostCard id={1}/>
            </div>
        </div>
    );
};

export default HostsPage;
