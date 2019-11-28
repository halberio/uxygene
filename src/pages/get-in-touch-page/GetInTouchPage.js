import React from "react";
import "./get-in-touch-page.scss";
import { Input, Form } from "antd";
import BannerGroupFb from "../../components/svg/BannerGroupFb";
import {Helmet} from "react-helmet";
const GetInTouchForm = props => {
  const { getFieldDecorator } = props.form;
  const handleSubmit = (e) => {
    e.preventDefault()
  };
  return (
    <div className={"get-in-touch-page"}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>uxygène | Contact</title>
        <link rel="canonical" href="http://uxygène.org/get-in-touch" />
        <meta name="description" content="uxygène | Contact : user experience camp"/>
      </Helmet>
      <div className="row-container">
        <div className="left">
          <div className="top">
            <h1 className="black-big">Let’s talk</h1>
            <h2 className="black-big">We are humain !</h2>
          </div>
          <div className="bottom">
            <p className="dark">
              Join us on our <strong> Facebook Group </strong>.
            </p>
            <p className={"dark"}>We are so reactive and collaborative.</p>
            <BannerGroupFb />
          </div>
        </div>
        <div className="right">
          <Form onSubmit={handleSubmit}  className="get-in-touch-form">
            <Form.Item>
              {getFieldDecorator("name", {
                rules: [{ required: true, message: "Please input your name!" }]
              })(<Input  placeholder="Your Full Name" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("email", {
                rules: [{ required: true, message: "Please input your email!" }]
              })(<Input  placeholder="Your Email" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("message", {
                rules: [
                  { required: true, message: "Please input your Message!" }
                ]
              })(<Input    type="text" placeholder="Message" />)}
            </Form.Item>
            <button type={"submit"} className={"submit-btn-get-in-touch"}><span>Send Now</span></button>
          </Form>

        </div>
      </div>
    </div>
  );
};
const GetInTouchPage = Form.create({ name: "normal_login" })(GetInTouchForm);
export default GetInTouchPage;
