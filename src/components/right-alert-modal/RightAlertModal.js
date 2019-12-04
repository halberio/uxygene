import React, { useEffect, useState } from "react";
import "./right-alert-modal.scss";
import CloseIconWhite from "../svg/CloseIconWhite";
import { Motion, spring } from "react-motion";
import { useDispatch, useSelector } from "react-redux";
import { hideModalRight } from "../../actions/interface-actions/actions";
const RightAlertModal = () => {
  const dispatch = useDispatch();
  let modalRightVisible = useSelector(
    state => state.interfaceReducer.modalRightVisible
  );
  let title = useSelector(state => state.interfaceReducer.title);
  let subTitle = useSelector(state => state.interfaceReducer.subTitle);
  let content = useSelector(state => state.interfaceReducer.content);
  const [isVisible, setIsVisible] = useState(modalRightVisible);

  useEffect(() => {
    setIsVisible(modalRightVisible);
    setTimeout(async () => {
      await dispatch(hideModalRight());
    }, 5000);
  }, [modalRightVisible, dispatch]);

  return (
    <Motion style={{ x: spring(isVisible === true ? 0 : 500) }}>
      {({ x }) => (
        <div
          className={"right-aler-modal"}
          style={{
            right: `${-x}px`
          }}
        >
          <div className={"header"}>
            <h1>{title ? title : "HEY YOU!"}</h1>{" "}
            <button onClick={() => dispatch(hideModalRight())}>
              <CloseIconWhite />
            </button>
          </div>
          <div className="body">
            <h2>{subTitle ? subTitle : "Thank you"} </h2>
            <p>{content ? content : "Enjoy!"}</p>
          </div>
        </div>
      )}
    </Motion>
  );
};

export default RightAlertModal;
