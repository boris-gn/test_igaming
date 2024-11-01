import React from "react";
import { ReactComponent as Check } from "../../assets/icons/check-circle.svg"
import "./CustomInput.scss";

const CustomInput = ({ value, onChange }) => {
    return (
        <div className="custom-input">
            <input
                type="text"
                className="custom-input-field"
                value={value}
                onChange={onChange}
            />
            <Check />
        </div>
    )
}

export default CustomInput;
