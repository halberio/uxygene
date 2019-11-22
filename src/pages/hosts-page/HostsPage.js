import React, {useState} from 'react';
import './hosts-page.scss';
import AdjustIcon from "../../components/svg/AdjustIcon";
import HostCard from "../../components/host-card/HostCard";
import HostJoinCard from "../../components/host-join-card/HostJoinCard";
import "../../components/filter-card/filter-card.scss";
import {Motion, spring} from "react-motion";
import SearchCard from "../../components/search-card/SearchCard";
const HostsPage = () => {
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [isFilterItemsActive, setIsFilterItemsActive] = useState(false);
    const handleFilterStatus = ()=>{
        if(isFilterItemsActive){
            setIsFilterItemsActive(false);
            setTimeout(()=>{
                setIsFilterActive(false)
            },120)
        }else{
            setIsFilterActive(true);
            setTimeout(()=>{
                setIsFilterItemsActive(true)
            },190)
        }
    }
    return (
        <div className={"hosts-page"}>
            <div className="navigation-filters-container">
                <div  className={`filter-card coworking-filter ${isFilterActive ? "coworking-filter active": null}` }>
                    <h1 onClick={handleFilterStatus}> {isFilterActive ? 'Filter view by' :"Display filter"}</h1>
                    <span onClick={handleFilterStatus}><AdjustIcon /></span>

                    <Motion style={{
                        scale: spring(isFilterActive ? 1 : 0) ,
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
                                            id={"coworkingspacecheckbox"}
                                            name="coworkingspace"
                                            value="coworkingspace"
                                        />
                                        <label htmlFor={"coworkingspacecheckbox"}>Coworking space</label>
                                    </li>
                                    <li  style={{
                                        opacity: opacity,
                                        transform: `translateY(${translate2}px`,
                                    }}>
                                        <input
                                            type="checkbox"
                                            id={"universitycheckbox"}
                                            name="university"
                                            value="university"
                                        />
                                        <label htmlFor={"universitycheckbox"}>University</label>
                                    </li>
                                    <li  style={{
                                        opacity: opacity,
                                        transform: `translateY(${translate3}px`,
                                    }}>
                                        {" "}
                                        <input
                                            type="checkbox"
                                            id={"academycentercheckbox"}
                                            name="academycenter"
                                            value="academycenter"
                                        />
                                        <label htmlFor={"academycentercheckbox"}>Academy center</label>
                                    </li>
                                    <li  style={{
                                        opacity: opacity,
                                        transform: `translateY(${translate4}px`,
                                    }}>
                                        <input
                                            type="checkbox"
                                            id={"ongcheckbox"}
                                            name="ong"
                                            value="ong"
                                        />
                                        <label htmlFor={"ongcheckbox"}>Ong</label>
                                    </li>

                                </ul>
                            </div>
                        }
                    </Motion>
                </div>
                <SearchCard />
            </div>
            <div className="hosts-container">
                <HostJoinCard/>
                <HostCard id={1}/>
                <HostCard id={2}/>
                <HostCard id={3}/>
                <HostCard id={4}/>
                <HostCard id={5}/>
                <HostCard id={6}/>
                <HostJoinCard/>
                <HostCard id={7}/>
            </div>
        </div>
    );
};

export default HostsPage;
