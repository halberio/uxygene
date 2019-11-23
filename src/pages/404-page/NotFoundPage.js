import React from 'react';
import "./not-found-page.scss";
import {withRouter} from "react-router-dom";

const NotFoundPage = (props) => {
    const goBackFromWhenever = ()=>{
        props.history.push("/");
    }
    return (
        <div className={"not-found-page"}>
            <div className="max-width-row">
                <h1>404</h1>
                <h2>Not found</h2>
                <button onClick={goBackFromWhenever} className={"back-btn-not-found-page"}>Go Back</button>
            </div>
        </div>
    );
};

export default withRouter(NotFoundPage);
