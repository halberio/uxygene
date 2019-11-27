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
      <span onClick={changeSearchContainerVisibility} className={"search-icon-container-bar"}>
        <SearchIcon />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={67.6}
          height={45}
          viewBox="0 0 67.5 45"
          id={"on-hover-svg-search"}
        >
          <path
            className="a"
            d="M28.125-45h-56.25a5.625,5.625,0,0,0-5.625,5.625v33.75A5.625,5.625,0,0,0-28.125,0h56.25A5.625,5.625,0,0,0,33.75-5.625v-33.75A5.625,5.625,0,0,0,28.125-45ZM30-5.625A1.877,1.877,0,0,1,28.125-3.75h-56.25A1.877,1.877,0,0,1-30-5.625v-33.75a1.877,1.877,0,0,1,1.875-1.875h56.25A1.877,1.877,0,0,1,30-39.375ZM-14.063-21.094v-2.812a1.406,1.406,0,0,0-1.406-1.406h-2.812a1.406,1.406,0,0,0-1.406,1.406v2.812a1.406,1.406,0,0,0,1.406,1.406h2.812A1.406,1.406,0,0,0-14.063-21.094Zm11.25,0v-2.812a1.406,1.406,0,0,0-1.406-1.406H-7.031a1.406,1.406,0,0,0-1.406,1.406v2.812a1.406,1.406,0,0,0,1.406,1.406h2.812A1.406,1.406,0,0,0-2.813-21.094Zm11.25,0v-2.812a1.406,1.406,0,0,0-1.406-1.406H4.219a1.406,1.406,0,0,0-1.406,1.406v2.812a1.406,1.406,0,0,0,1.406,1.406H7.031A1.406,1.406,0,0,0,8.437-21.094Zm11.25,0v-2.812a1.406,1.406,0,0,0-1.406-1.406H15.469a1.406,1.406,0,0,0-1.406,1.406v2.812a1.406,1.406,0,0,0,1.406,1.406h2.812A1.406,1.406,0,0,0,19.687-21.094Zm-39.375,9.375v-2.812a1.406,1.406,0,0,0-1.406-1.406h-2.812a1.406,1.406,0,0,0-1.406,1.406v2.812a1.406,1.406,0,0,0,1.406,1.406h2.812A1.406,1.406,0,0,0-19.688-11.719Zm45,0v-2.812a1.406,1.406,0,0,0-1.406-1.406H21.094a1.406,1.406,0,0,0-1.406,1.406v2.812a1.406,1.406,0,0,0,1.406,1.406h2.812A1.406,1.406,0,0,0,25.312-11.719Zm-45-18.75v-2.812a1.406,1.406,0,0,0-1.406-1.406h-2.812a1.406,1.406,0,0,0-1.406,1.406v2.812a1.406,1.406,0,0,0,1.406,1.406h2.812A1.406,1.406,0,0,0-19.688-30.469Zm11.25,0v-2.812a1.406,1.406,0,0,0-1.406-1.406h-2.812a1.406,1.406,0,0,0-1.406,1.406v2.812a1.406,1.406,0,0,0,1.406,1.406h2.812A1.406,1.406,0,0,0-8.438-30.469Zm11.25,0v-2.812a1.406,1.406,0,0,0-1.406-1.406H-1.406a1.406,1.406,0,0,0-1.406,1.406v2.812a1.406,1.406,0,0,0,1.406,1.406H1.406A1.406,1.406,0,0,0,2.812-30.469Zm11.25,0v-2.812a1.406,1.406,0,0,0-1.406-1.406H9.844a1.406,1.406,0,0,0-1.406,1.406v2.812a1.406,1.406,0,0,0,1.406,1.406h2.812A1.406,1.406,0,0,0,14.062-30.469Zm11.25,0v-2.812a1.406,1.406,0,0,0-1.406-1.406H21.094a1.406,1.406,0,0,0-1.406,1.406v2.812a1.406,1.406,0,0,0,1.406,1.406h2.812A1.406,1.406,0,0,0,25.312-30.469ZM14.062-12.656v-.937A1.406,1.406,0,0,0,12.656-15H-12.656a1.406,1.406,0,0,0-1.406,1.406v.937a1.406,1.406,0,0,0,1.406,1.406H12.656A1.406,1.406,0,0,0,14.062-12.656Z"
            transform="translate(33.75 45)"
          />
        </svg>
      </span>
      <h1 onClick={changeSearchContainerVisibility}>Type To search</h1>
      <Motion
        style={{
          x: spring(searchContainerHidden ? 100 : 0,{stiffness:300, damping:40}),
          y: spring(searchContainerHidden ? 0 : 1,{stiffness:300, damping:40})
        }}
      >
        {({ x, y }) => (
          <div
            className="search-container"
            style={{
              display: !searchContainerHidden ? "flex" : "flex",
              opacity: y,
                WebkitTransform: `translateY(${x}%`,
                transform: `translateY(${x}%`,
              pointerEvents: !searchContainerHidden ? "all" : "none"
            }}
          >
            <div className="max-with-container">
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
          </div>
        )}
      </Motion>
    </div>
  );
};
const SearchCard = Form.create({ name: "search-form" })(SearchForm);
export default SearchCard;
