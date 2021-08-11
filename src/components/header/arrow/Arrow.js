import React from "react";
import "./Arrow.scss";

const Arrow = (props) => {
    return (
        <div className="header__arrow-back">
            <a href="../index.html">
                <i className="fas fa-arrow-left"></i>
            </a>
        </div>
    );
};

export default Arrow;
