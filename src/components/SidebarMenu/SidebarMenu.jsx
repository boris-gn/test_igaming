import React from "react";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/circle_x.svg";

import "./SidebarMenu.scss"

const SidebarMenu = ({ onClose }) => {
    return (
        <div className="sidebar-menu">
            <div className="sidebar-header">
                <div className="logo">
                    <Logo />
                </div>
                <button className="close-button" onClick={onClose}>
                    <CloseIcon />
                </button>
            </div>
            <ul className="menu-list">
                <li>Casino Games</li>
                <li>Live Games</li>
                <li>TV-Bet</li>
                <li>Sport Games</li>
                <li>Virtual</li>
                <li>Tournaments</li>
                <li>Spin Shop</li>
                <li>FAQ</li>
                <li>Support Chat</li>
            </ul>
        </div>
    );
};

export default SidebarMenu;
