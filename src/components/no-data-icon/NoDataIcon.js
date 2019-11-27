import React from "react";
import "./no-data-icon.scss";

const NoDataIcon = (props) => {
  return (
    <div className={"no-data-icon"}>
     <div className="svg-holder">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.44 110.439">
             <defs />
             <style>
                 {
                     ".ax{fill:#ffcc00;}" +
                     ".bx{fill:url(#ax);}" +
                     ".cx{fill:none;stroke:#212121;" +
                     "stroke-linecap:round;stroke-linejoin:round;" +
                     "stroke-width:3px;}" +
                     ".dx{fill:#212121;}.ex{fill:#feeb98;}"
                 }
             </style>
             <defs>
                 <radialGradient
                     id="ax"
                     cx=".5"
                     cy=".5"
                     r=".5"
                     gradientUnits="objectBoundingBox"
                 >
                     <stop offset="0" stopColor="#fc0" />
                     <stop offset="1" stopColor="#ffcc00" />
                 </radialGradient>
             </defs>
             <path
                 fill="#fdd835"
                 d="M55.22 0A55.22 55.22 0 110 55.22 55.22 55.22 0 0155.22 0z"
             />
             <path
                 fill="url(#ax)"
                 d="M55.22 0A55.22 55.22 0 110 55.22 55.22 55.22 0 0155.22 0z"
             />
             <path d="M41.72 75.553a23.618 23.618 0 0127.081 0" className="cx" />
             <path
                 d="M32.26 43.641a9.5 9.5 0 11-9.5 9.5 9.5 9.5 0 019.5-9.5zM78.26 43.641a9.5 9.5 0 11-9.5 9.5 9.5 9.5 0 019.5-9.5z"
                 className="dx"
             />
             <path
                 d="M36.927 48.6a2.334 2.334 0 11-2.333-2.334 2.334 2.334 0 012.333 2.334zM82.927 48.6a2.333 2.333 0 11-2.333-2.334 2.334 2.334 0 012.333 2.334z"
                 className="ex"
             />
             <path
                 d="M30.401 34.387a15.143 15.143 0 01-11.446 10.092M80.26 34.387a15.146 15.146 0 0011.447 10.092"
                 className="cx"
             />
         </svg>
     </div>
        <p>{props.msg}</p>
    </div>
  );
};

export default NoDataIcon;
