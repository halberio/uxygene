import React from 'react';
import "./footer.scss";
import { NavLink} from "react-router-dom";
const Footer = () => {
    return (
        <div className={"footer"}>
            <div className="max-width-row">
                <div className="right">
                    <NavLink activeClassName={"active"} to={"/privacy-policy"}>Privacy Policy</NavLink>
                    <NavLink activeClassName={"active"} to={"/terms-and-conditions"}>Terms and conditions</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;
