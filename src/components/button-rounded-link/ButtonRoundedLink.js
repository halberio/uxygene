import React, {useState} from "react";
import "./button-rounded-link.scss";
import { withRouter } from "react-router-dom";
import ArrowRight from "../svg/ArrowRight";
import {Motion, spring} from 'react-motion';
const ButtonRoundedLink = props => {
    const [animateTheArrow, setAnimateTheArrow]=useState(false);

    const goToLink = () =>{
        if(props.linkTo){
            setAnimateTheArrow(true);
            setTimeout(()=>{
                props.history.push(props.linkTo)
            },400)
        }
    }
  return (
    <div onClick={goToLink} className={"button-rounded-link"}>
      <span className={'element-text'}>{props.btnText}</span>

        <Motion style={{x: spring(animateTheArrow? 300 : 0)}}>
            {({x}) =>
                <span className={"arrow-container-span"} style={{
                WebkitTransform: `translate3d(${x}%, 0, 0)`,
                transform: `translate3d(${x}%, 0, 0)`,
            }}>
                <ArrowRight /></span>
            }
        </Motion>
    </div>
  );
};

export default withRouter(ButtonRoundedLink);
