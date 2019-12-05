import React, { useRef, useState } from "react";
import "./invite-talent-form.scss";
import { Carousel, Form, Input } from "antd";
const InviteTalentFormBlock = props => {
  const carouselReference = useRef();
  const { getFieldDecorator } = props.form;
  const [btnNextTexValue, setbtnNextTexValue] = useState("Next");
  const [btnBackShowed, setbtnBackShowed] = useState(false);
  const [currentSlid, setCurrentSlide] = useState(0);

  const goNext = async () => {
    if (currentSlid < 2) {
      carouselReference.current.next();
    } else {
      await handleFormSubmit();
    }
  };
  const goPrev = () => {
    carouselReference.current.prev();
  };

  const handleFormSubmit = () => {
    console.log("done");
  };

  const handleBtnBackStatus = id => {
    setbtnBackShowed(id + 1 > 0);
    setbtnNextTexValue(id + 1 === 2 ? "Confirm" : "Next");
  };
  return (
    <div className={"invite-talent-form"}>
      <div className="form-header">
        <h3>We are happy to collaborate with you..</h3>
        <h2>Please fill in the following form</h2>
      </div>

      <Form>
        <Carousel
          ref={carouselReference}
          beforeChange={handleBtnBackStatus}
          afterChange={id => setCurrentSlide(id)}
        >
          <div>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your host type!" }
                ]
              })(<Input placeholder="What Type of Host Are you?" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    type: "email",
                    message: "Please input your email!"
                  }
                ]
              })(<Input placeholder="Yout Email" />)}
            </Form.Item>
          </div>
          <div>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input When you need me!" }
                ]
              })(<Input placeholder="When?" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input where you need me!" }
                ]
              })(<Input placeholder="Where?" />)}
            </Form.Item>
          </div>

          <div>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    message: "Please input the subject of the event!"
                  }
                ]
              })(<Input placeholder="Subject of event?" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "Free or paid!" }]
              })(<Input placeholder="Your event is paid?" />)}
            </Form.Item>
          </div>
        </Carousel>
      </Form>
      <div className="btns-holder">
        <button
          style={{
            opacity: btnBackShowed === true ? 1 : 0,
            pointerEvents: btnBackShowed === true ? "all" : "none"
          }}
          className={"back-btn"}
          onClick={goPrev}
        >
          Back
        </button>
        <button className={"next-btn"} onClick={goNext}>
          {btnNextTexValue}
        </button>
      </div>
    </div>
  );
};
const InviteTalentForm = Form.create({ name: "invite-form" })(
  InviteTalentFormBlock
);
export default InviteTalentForm;
