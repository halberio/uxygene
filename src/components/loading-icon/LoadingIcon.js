import React from "react";
import "./loading-icon.scss";
import { TimelineLite } from "gsap";
import logoIconSmall from "../../assets/img/logo-icon.png";
const LoadingIcon = (props) => {
  const loadingIconTimeline = new TimelineLite();
  loadingIconTimeline.to(`#back-water`, 5, {
    x: 200
  });
  return (
    <div className={"loading-icon"} style={{
        transform:`scale(${props.scale ? props.scale : 1})`,
        WebkitTransform:`scale(${props.scale ? props.scale : 1})`
    }}>
        <div className="wave-back">
            <svg
                viewBox="0 0 391.513 139.042"
            >
                <defs>
                    <style>{".s{fill:url(#a);}"}</style>
                    <linearGradient
                        id="a"
                        x1={0.5}
                        x2={0.5}
                        y2={0.546}
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset={0} stopColor="#ffba00" />
                        <stop offset={1} stopColor="#ff7f00" />
                    </linearGradient>
                </defs>
                <path
                    className="s"
                    d="M5715.974,4922.709s-21.407,23.894-55.107,17.638-44.139-29.059-79.366-36.52-61.77,18.949-61.77,18.949l.064,118.761h196.179Z"
                    transform="translate(-5324.46 -4902.496)"
                />
                <path
                    className="s"
                    d="M5715.764,4922.767s-21.262,23.831-54.963,17.576-44.139-29.059-79.365-36.52-61.705,18.881-61.705,18.881v118.829h196.179Z"
                    transform="translate(-5519.73 -4902.491)"
                />
            </svg>
            <svg
                viewBox="0 0 391.513 139.042"
            >
                <defs>
                    <style>{".s{fill:url(#a);}"}</style>
                    <linearGradient
                        id="a"
                        x1={0.5}
                        x2={0.5}
                        y2={0.546}
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset={0} stopColor="#ffba00" />
                        <stop offset={1} stopColor="#ff7f00" />
                    </linearGradient>
                </defs>
                <path
                    className="s"
                    d="M5715.974,4922.709s-21.407,23.894-55.107,17.638-44.139-29.059-79.366-36.52-61.77,18.949-61.77,18.949l.064,118.761h196.179Z"
                    transform="translate(-5324.46 -4902.496)"
                />
                <path
                    className="s"
                    d="M5715.764,4922.767s-21.262,23.831-54.963,17.576-44.139-29.059-79.365-36.52-61.705,18.881-61.705,18.881v118.829h196.179Z"
                    transform="translate(-5519.73 -4902.491)"
                />
            </svg>
        </div>
        <div className="logo-layer">
            <img src={logoIconSmall} alt="Log uxygène"/>
        </div>
        <div className="wave-front">
            <svg
                viewBox="0 0 391.513 139.042"
            >
                <defs>
                    <style>{".a2{opacity:0.9;}.b2{fill:url(#a2);}"}</style>
                    <linearGradient
                        id="a2"
                        x1={0.5}
                        x2={0.5}
                        y2={1}
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset={0} stopColor="#ffe200" />
                        <stop offset={0.414} stopColor="#fc0" />
                        <stop offset={1} stopColor="#fc0" />
                    </linearGradient>
                </defs>
                <g className="a2" transform="translate(0 0)">
                    <path
                        className="b2"
                        d="M2400.477-4455.655H2205.141v-118.828s21.406,23.895,55.107,17.639,44.139-29.059,79.365-36.521,61.771,18.95,61.771,18.95v.073c1.487,1.66,21.772,23.516,54.2,17.5,33.7-6.256,44.139-29.058,79.365-36.521s61.706,18.882,61.706,18.882v118.829Z"
                        transform="translate(-2205.141 4594.696)"
                    />
                </g>
            </svg>
            <svg
                viewBox="0 0 391.513 139.042"
            >
                <defs>
                    <style>{".a2{opacity:0.9;}.b2{fill:url(#a2);}"}</style>
                    <linearGradient
                        id="a2"
                        x1={0.5}
                        x2={0.5}
                        y2={1}
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset={0} stopColor="#ffe200" />
                        <stop offset={0.414} stopColor="#fc0" />
                        <stop offset={1} stopColor="#fc0" />
                    </linearGradient>
                </defs>
                <g className="a2" transform="translate(0 0)">
                    <path
                        className="b2"
                        d="M2400.477-4455.655H2205.141v-118.828s21.406,23.895,55.107,17.639,44.139-29.059,79.365-36.521,61.771,18.95,61.771,18.95v.073c1.487,1.66,21.772,23.516,54.2,17.5,33.7-6.256,44.139-29.058,79.365-36.521s61.706,18.882,61.706,18.882v118.829Z"
                        transform="translate(-2205.141 4594.696)"
                    />
                </g>
            </svg>
        </div>
        <div className="border-round">
            <svg {...props} viewBox="0 0 212 212">
                <defs>
                    <style>
                        {
                            ".a{stroke:#fcd774;stroke-width:10px;fill:url(#a);}.b{stroke:none;}.c{fill:none;}"
                        }
                    </style>
                    <radialGradient
                        id="a"
                        cx={0.5}
                        cy={0.5}
                        r={0.5}
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset={0} stopColor="#fc0" stopOpacity={0} />
                        <stop offset={1} stopColor="#fc0" stopOpacity={0.114} />
                    </radialGradient>
                </defs>
                <g className="a">
                    <circle className="b" style={{opacity:"0"}} cx={106} cy={106} r={106} />
                    <circle className="c" cx={106} cy={106} r={101} />
                </g>
            </svg>
        </div>
    </div>
  );
};

export default LoadingIcon;
