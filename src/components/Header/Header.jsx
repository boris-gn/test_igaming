import React, { useState } from "react";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";
import Avatar from "../Avatar/Avatar";

import { ReactComponent as BurgerIcon } from "../../assets/icons/burger.svg";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Gift } from "../../assets/icons/gift.svg";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";

import "./Header.scss";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header>
            <div className="header-left">
                <BurgerIcon onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                <div><Logo /></div>
            </div>
            <div className="header-right">
                <div className="action-icons">
                    <Search />
                    <Gift />
                    <Bell />
                </div>
                <HeaderDropdown />
                <Avatar />
            </div>
            {isSidebarOpen && <SidebarMenu onClose={() => setIsSidebarOpen(!isSidebarOpen)} />}
        </header>
    )
}

export default Header;