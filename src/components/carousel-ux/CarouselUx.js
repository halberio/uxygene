import React, { useRef} from "react";
import "./carouse-ux.scss";
import { Carousel } from "antd";
import ArrowLeftBlack from "../svg/ArrowLeftBlack";
import ArrowRightBlack from "../svg/ArrowRightBlack";
const CarouselUx = props => {
  const carouselRef = useRef();

  const goNext=()=>{
      carouselRef.current.next();
  }
    const goPrev=()=>{
        carouselRef.current.prev();
    }
  return (
    <div className="carousel-ux">
      <Carousel ref={carouselRef}>
        {props && props.pictures && props.pictures.length > 0
          ? props.pictures.map((item, index) => (
              <img
                key={index}
                src={process.env.REACT_APP_STORAGE_URL + item.image_path}
                alt={item.id+index+"taginside"}
              />
            ))
          : null}
      </Carousel>
        {props && props.pictures && props.pictures.length > 1 ? <div className="navigation-items-carousel-ux">
            <button onClick={goPrev}>
                <ArrowLeftBlack />
            </button>
            <button onClick={goNext}>
                <ArrowRightBlack />
            </button>
        </div> : null}
    </div>
  );
};

export default CarouselUx;
