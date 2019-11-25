import React from 'react';
import "./invite-talent-form.scss"
import {Form,Input} from "antd";
const InviteTalentFormBlock = (props) => {
    const { getFieldDecorator } = props.form;
    return (
        <div className={"invite-talent-form"}>
            <div className="form-header">
                <h3>We are happy to collaborate with you..</h3>
                <h2>Please fill in the following form</h2>
            </div>
            <Form>
                <Form.Item >
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item >
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item >
                   <button className={"sbt-btn"}>Submit</button>
                </Form.Item>

            </Form>
        </div>
    );
};
const InviteTalentForm = Form.create({ name: 'invite-form' })(InviteTalentFormBlock);
export default InviteTalentForm;
