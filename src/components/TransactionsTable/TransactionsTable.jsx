import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import useScreenWidth from '../../utils/useScreenWidth';

import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import transactionData from '../../data/transactionData';

import './TransactionsTable.scss';

const MOBILE_WIDTH = 768;

const TransactionsTable = ({ openPopup }) => {
    const screenWidth = useScreenWidth();

    return (
        <div className="transactions-table">
            <h2>Last Transactions</h2>
            <table>
                <div className="filter-box">
                    <FilterIcon className="filter-icon" />
                </div>
                <tbody>
                    {screenWidth > MOBILE_WIDTH ?
                        transactionData.map((transaction, index) => (
                            <tr key={index}>
                                <td className="payment-method-td">
                                    <div className="payment-method-img">
                                        <img src={transaction.imgUrl} alt={transaction.method} />
                                    </div>
                                </td>
                                <td>
                                    <div className="table-text-box">
                                        <span className="table-primary-txt">{transaction.method}</span>
                                        <span className="table-secondary-txt">{transaction.type}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="table-text-box">
                                        <span className="table-primary-txt">{transaction.transactionNumber}</span>
                                        <span className="table-secondary-txt">Transaction Number</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="table-text-box">
                                        <span className="table-primary-txt">{transaction.date}</span>
                                        <span className="table-secondary-txt">Payment Date</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="table-text-box">
                                        <span className="table-primary-txt">{transaction.amount}</span>
                                        <span className="table-secondary-txt">Amount Payed</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="table-text-box">
                                        <span className={`status table-primary-txt ${transaction.status.toLowerCase()}`}>{transaction.status}</span>
                                        <span className="table-secondary-txt">Operation Status</span>
                                    </div>
                                </td>
                            </tr>
                        )) : <div className="transaction-cards">
                            {transactionData.map((transaction, index) => (
                                <div key={index} className="transaction-card">
                                    <div className="payment-method-td">
                                        <div className="payment-method-img">
                                            <img src={transaction.imgUrl} alt={transaction.method} />
                                        </div>
                                        <div className="table-text-box">
                                            <span className={`status table-primary-txt ${transaction.status.toLowerCase()}`}>{transaction.status}</span>
                                            <span className="table-secondary-txt">Operation Status</span>
                                        </div>
                                    </div>
                                    <div style={{
                                        overflowX: "scroll",
                                        width: "100%",
                                        marginLeft: "12px",
                                    }}>
                                        <td>
                                            <div className="table-text-box">
                                                <span className="table-primary-txt">{transaction.method}</span>
                                                <span className="table-secondary-txt">{transaction.type}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="table-text-box">
                                                <span className="table-primary-txt">{transaction.transactionNumber}</span>
                                                <span className="table-secondary-txt">Transaction Number</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="table-text-box">
                                                <span className="table-primary-txt">{transaction.date}</span>
                                                <span className="table-secondary-txt">Payment Date</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="table-text-box">
                                                <span className="table-primary-txt">{transaction.amount}</span>
                                                <span className="table-secondary-txt">Amount Payed</span>
                                            </div>
                                        </td>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }

                </tbody>
            </table>
            <div className="table-button">
                <CustomButton label="Show More" onClick={openPopup} />
            </div>
        </div>
    );
};

export default TransactionsTable;
