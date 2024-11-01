import React from "react";

import "./CustomButton.scss";

const CustomButton = ({ label, onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            {label}
        </button>
    )
}

export default CustomButton;
