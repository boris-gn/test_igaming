import React, { useState } from "react";

import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg"
import "./PaymentDropdown.scss";

const PaymentDropdown = ({ selectedOption, options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="payment-dropdown">
            <div className="payment-tile" onClick={handleToggle}>
                <img src={selectedOption.icon} alt={selectedOption.method} className="payment-icon" />
                <div className="payment-details">
                    <span className="payment-title">{selectedOption.method}, {selectedOption.currency} • Commission {selectedOption.commission}%</span>
                    <span className="payment-subtitle">Please notice that you will send money in the {selectedOption.currency}</span>
                </div>
                {/* <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>▼</span> */}
                <ArrowIcon className={`dropdown-arrow ${isOpen ? "open" : ""}`} />
            </div>

            {isOpen && (
                <div className="dropdown-options">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="dropdown-option"
                            onClick={() => handleOptionClick(option)}
                        >
                            <img src={option.icon} alt={option.method} className="payment-icon" />
                            <div className="payment-details">
                                <span className="payment-title">{option.method}, {option.currency} • Commission {option.commission}%</span>
                                <span className="payment-subtitle">Please notice that you will send money in the {option.currency}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PaymentDropdown;
