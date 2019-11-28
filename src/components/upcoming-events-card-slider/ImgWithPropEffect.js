import React, { useEffect, useState } from "react";
import { Motion, spring } from "react-motion";
const ImgWithPropEffect = props => {
  const [loaded, setLoaded] = useState(false);
  const [oldImg, setOldImg] = useState(props.src);
  const [currentImg, setCurrentImg] = useState(props.src);

  const [oldAlt, setOldAlt] = useState(props.alt);
  const [currentAlt, setCurrentAlt] = useState(props.alt);

  useEffect(() => {
    setCurrentImg(oldImg);
    setCurrentAlt(oldAlt);
  }, [oldImg, oldAlt]);

  useEffect(() => {
    setLoaded(false);
    setTimeout(() => {
      setOldImg(props.src);
      setOldAlt(props.alt);
      setCurrentAlt(props.alt);
      setCurrentImg(props.src);
      setLoaded(true);
    }, 500);
  }, [props.src, props.alt]);

  return (
      <Motion
        style={{
          x: spring(loaded ? 1 : 0)
        }}
      >
        {({ x, translateValue }) =>
          props && props.src ? (
            <img
              style={{
                opacity: x,
                transform: `translateX(${translateValue}%)`
              }}
              src={currentImg}
              alt={currentAlt}
            />
          ) : null
        }
      </Motion>
  );
};

export default ImgWithPropEffect;
