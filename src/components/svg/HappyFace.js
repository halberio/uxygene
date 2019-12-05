import React from "react";

const HappyFace = props => {
  return (
    <svg {...props} width={116} height={116} viewBox="0 0 116 116">
      <defs>
        <style>
          {
            ".a{fill:#fc0;}.b{fill:#f2bc0f;opacity:0.7;}.c{fill:#393c54;}.d{fill:#fff;}.e,.g{fill:#515570;}.f{fill:#f5c309;}.g{opacity:0.1;}"
          }
        </style>
      </defs>
      <g transform="translate(-6 -6)">
        <circle
          className="a"
          cx={58}
          cy={58}
          r={58}
          transform="translate(6 6)"
        />
        <path
          className="b"
          d="M53,107A71.65,71.65,0,0,1,16.25,96.91,58,58,0,0,0,121.56,57,72,72,0,0,1,53,107Z"
        />
        <path
          className="c"
          d="M90.3,77a3.3,3.3,0,0,1,3.28,3.7,29.76,29.76,0,0,1-59.15,0A3.3,3.3,0,0,1,37.7,77Z"
        />
        <path className="d" d="M45,77H83v5a4,4,0,0,1-4,4H49a4,4,0,0,1-4-4Z" />
        <path
          className="d"
          d="M45,100.21a29.52,29.52,0,0,0,38,0V100a4,4,0,0,0-4-4H49a4,4,0,0,0-4,4Z"
        />
        <circle
          className="d"
          cx={13}
          cy={13}
          r={13}
          transform="translate(26 46)"
        />
        <circle
          className="e"
          cx={7}
          cy={7}
          r={7}
          transform="translate(32 52)"
        />
        <path className="f" d="M26,77c0-7.18,5.82-10,13-10s13,2.82,13,10" />
        <circle
          className="d"
          cx={13}
          cy={13}
          r={13}
          transform="translate(76 46)"
        />
        <circle
          className="e"
          cx={7}
          cy={7}
          r={7}
          transform="translate(82 52)"
        />
        <path className="f" d="M76,77c0-7.18,5.82-10,13-10s13,2.82,13,10" />
        <rect
          className="g"
          width={42}
          height={4}
          transform="translate(43 77)"
        />
      </g>
    </svg>
  );
};

export default HappyFace;
