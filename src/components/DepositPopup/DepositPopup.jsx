import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import PaymentDropdown from "../PaymentDropdown/PaymentDropdown";
import CustomInput from "../CustomInput/CustomInput";
import paymentOptions from "../../data/paymentOptionsData";
import useScreenWidth from "../../utils/useScreenWidth";

import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg"
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg"

import "./DepositPopup.scss";

const MOBILE_WIDTH = 768;

const DepositPopup = ({ onClose, inputValue, handleChange }) => {
    const screenWidth = useScreenWidth();

    const [amount, setAmount] = useState(21);
    const [promoCode, setPromoCode] = useState("");
    const [selectedPayment, setSelectedPayment] = useState(paymentOptions[0]);

    const popupClass = screenWidth > MOBILE_WIDTH ? " popup deposit-popup" : "mobile-popup";

    const handleAmountChange = (increment) => {
        setAmount((prev) => Math.max(21, prev + increment));
    };

    const handleApplyPromoCode = () => {
        // Add promo code validation logic here
    };

    return (
        <div className="popup-wrapper">
            <div className={popupClass}>
                <div className="popup-header">
                    <div className="back-button">
                        <ArrowIcon className="arrow-icon" onClick={onClose} />
                        Back to Payment Method
                    </div>
                    <CloseIcon onClick={onClose} />
                </div>

                <div className="balance-info">
                    Current Balance: <strong>$ 0.00</strong>
                </div>

                <PaymentDropdown
                    selectedOption={selectedPayment}
                    options={paymentOptions}
                    onSelect={setSelectedPayment}
                />

                <div className="amount-section">
                    <h3>Amount</h3>
                    <div className="amount-display">${amount}</div>
                    <div className="amount-buttons">
                        {[10, 20, 30, 50, 100].map((increment) => (
                            <div key={increment} onClick={() => handleAmountChange(increment)}>
                                +${increment}
                            </div>
                        ))}
                    </div>
                    <p className="amount-range">From 21.00 to 906.00 USD at a time</p>
                </div>

                <div className="promo-code-section">
                    <h3>Promo Code</h3>
                    <div className="promo-code-actions">
                        <CustomInput value={inputValue} onChange={handleChange} />
                        <CustomButton label="apply" />
                    </div>
                </div>

                <div className="popup-button">
                    <CustomButton label="Deposit" className="deposit-button" />
                </div>
            </div>
        </div>
    );
};

export default DepositPopup;
