import React, { useState } from "react";
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import MainContent from "./components/MainContent/MainContent";
import CustomInput from "./components/CustomInput/CustomInput";
import CustomButton from "./components/CustomButton/CustomButton";
import TransactionsTable from "./components/TransactionsTable/TransactionsTable";
import DepositPopup from "./components/DepositPopup/DepositPopup";

import paymentData from "./data/paymentData";
import cryptoData from "./data/cryotoData";

function App() {
    const [inputValue, setInputValue] = useState('ALPHA2021');
    const [isPopupVisible, setIsPopupVisible] = useState(true);
    const openPopup = () => setIsPopupVisible(true);
    const closePopup = () => setIsPopupVisible(false);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="App">
            <Header />
            <MainContent>
                <div className="page-title">Make a deposit</div>
                <div className="page-subtitle">Choose payment method</div>
                <div className="payment-cards">
                    <CardList
                        data={paymentData}
                        title="Cards, e-money, PIN"
                    />
                </div>
                <div className="crypto-cards">
                    <CardList
                        data={cryptoData}
                        title="Cryptocurrency"
                    />
                </div>
                <div className="promo-code">
                    <div className="promo-code-title page-title">Have a promo code?</div>
                    <div className="promo-code-subtitle">Enter promo code here. It will activate a special bonus!</div>
                    <div className="promo-code-actions">
                        <CustomInput value={inputValue} onChange={handleChange} />
                        <CustomButton label="apply" />
                    </div>
                </div>
                <TransactionsTable openPopup={openPopup} />
                {isPopupVisible && <DepositPopup onClose={closePopup} inputValue={inputValue} onChange={handleChange} />}
            </MainContent>
        </div>
    );
}

export default App;
