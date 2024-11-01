import React from "react";

import "./MainContent.scss";

const MainContent = ({ children }) => {
    return (
        <div className="main-content">
            {children}
        </div>
    )
}

export default MainContent;
