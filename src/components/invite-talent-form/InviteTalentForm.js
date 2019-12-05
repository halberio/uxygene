import React, { useRef, useState } from "react";
import "./invite-talent-form.scss";
import { Carousel, Form, Input, Switch, DatePicker } from "antd";
import { Motion, spring } from "react-motion";
import HappyFace from "../svg/HappyFace";
import { useDispatch } from "react-redux";
import { sendInvitation } from "../../actions/invitation-actions/actions";
const InviteTalentFormBlock = props => {
  const carouselReference = useRef();
  const { getFieldDecorator } = props.form;
  const dispatch = useDispatch();
  const [btnNextTexValue, setbtnNextTexValue] = useState("Next");
  const [btnBackShowed, setbtnBackShowed] = useState(false);
  const [currentSlid, setCurrentSlide] = useState(0);
  const [formSubmited, setformSubmited] = useState(false);
  const dateFormat = "YYYY/MM/DD";

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
  const resetAll = async () => {
    goPrev();
    if (currentSlid > 0) {
      goPrev();
    }
    if (currentSlid > 0) {
      goPrev();
    }
    await props.form.resetFields();
    setformSubmited(false);
  };
  const handleFormSubmit = async () => {
    setformSubmited(true);
    await props.form.validateFields(async (err, values) => {
      if (!err) {
        const body = {
          talent_id: props.talent_id,
          host_type: values.host_type,
          email: values.email,
          location: values.location,
          date: new Date(values.date, "yy/mm/dd"),
          subject: values.subject,
          paied: false
        };
        props.form.resetFields();
        await dispatch(sendInvitation(body));
        console.log("Received values of form: ", body);
      }
    });
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
              {getFieldDecorator("host_type", {
                rules: [
                  { required: true, message: "Please input your host type!" }
                ]
              })(<Input placeholder="What Type of Host Are you?" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("email", {
                rules: [
                  {
                    required: true,
                    type: "email",
                    message: "Please input your email!"
                  }
                ]
              })(<Input placeholder="Your Email" />)}
            </Form.Item>
          </div>
          <div>
            <Form.Item>
              {getFieldDecorator("date", {
                rules: [
                  { required: true, message: "Please input When you need me!" }
                ]
              })(<DatePicker format={dateFormat} placeholder="When?" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("location", {
                rules: [
                  { required: true, message: "Please input where you need me!" }
                ]
              })(<Input placeholder="Where?" />)}
            </Form.Item>
          </div>

          <div>
            <Form.Item>
              {getFieldDecorator("subject", {
                rules: [
                  {
                    required: true,
                    message: "Please input the subject of the event!"
                  }
                ]
              })(<Input placeholder="Subject of event?" />)}
            </Form.Item>
            <div className="check-paid-item">
              <Form.Item label="Your event is Free or Not">
                {getFieldDecorator("paied", { valuePropName: "paied" })(
                  <Switch />
                )}
              </Form.Item>
            </div>
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
      <Motion
        style={{
          x: spring(formSubmited ? 0 : 100),
          o: spring(formSubmited ? 1 : 0)
        }}
      >
        {({ x, o }) => (
          <div
            className="success-ms-container"
            style={{
              WebkitTransform: `translateY(${x}%)`,
              transform: `translateY(${x}%)`,
              opacity: o
            }}
          >
            <HappyFace />
            <h1>Ooooopppppaah!</h1>
            <h2>Your request is being processed!</h2>
            <p>
              We come back to you for a contact with our expert in the next 48
              hours.
            </p>
            <button onClick={resetAll}>Thanks, It’s understood</button>
          </div>
        )}
      </Motion>
    </div>
  );
};
const InviteTalentForm = Form.create({ name: "invite-form" })(
  InviteTalentFormBlock
);
export default InviteTalentForm;
