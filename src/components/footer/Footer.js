import React from 'react';
import "./footer.scss";
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <div className={"footer"}>
            <div className="max-width-row">
                <div className="right">
                    <Link to={"/privacy-policy"}>Privacy Policy</Link>
                    <Link to={"/terms-and-conditions"}>Terms and conditions</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
