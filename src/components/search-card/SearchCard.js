import React, { useState } from "react";
import SearchIcon from "../svg/SearchIcon";
import "./search-card.scss";
import "./search-container.scss";
import { Form, Switch, Input } from "antd";
import LogoWhite from "../svg/LogoWhite";
import { Motion, spring } from "react-motion";
const SearchForm = props => {
  const [searchContainerHidden, setSearchContainerHidden] = useState(true);
  const { getFieldDecorator } = props.form;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  const changeSearchContainerVisibility = () => {
    setSearchContainerHidden(!searchContainerHidden);
  };
  return (
    <div className={"search-card"}>
      <div onClick={changeSearchContainerVisibility}>
        <SearchIcon />
      </div>
      <h1 onClick={changeSearchContainerVisibility}>Type anywhere To search</h1>
      <Motion
        style={{
          x: spring(searchContainerHidden ? 100 : 0),
          y: spring(searchContainerHidden ? 0 : 1)
        }}
      >
        {({ x, y }) => (
          <div
            className="search-container"
            style={{
              display: !searchContainerHidden ? "flex" : "flex",
              WebkitTransform: `translate3d(${x}%, 0, 0)`,
              transform: `translate3d(${x}%, 0, 0) scale(${y})`,
              opacity: y
            }}
          >
            <div
              className="logo-container"
              onClick={changeSearchContainerVisibility}
            >
              <LogoWhite />
            </div>
            <Form layout="inline" onSubmit={handleSubmit}>
              <Form.Item>
                {getFieldDecorator("search", {
                  rules: [
                    { required: true, message: "Please input your keyword!" }
                  ]
                })(<Input placeholder="Search..." />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("type", {
                  rules: [{ message: "Please select your keyword!" }]
                })(
                  <div className={"container-switch"}>
                    <h3>UX Taltent</h3>
                    <Switch defaultChecked /> <h3>UX Events</h3>
                  </div>
                )}
              </Form.Item>
            </Form>
          </div>
        )}
      </Motion>
    </div>
  );
};
const SearchCard = Form.create({ name: "search-form" })(SearchForm);
export default SearchCard;
