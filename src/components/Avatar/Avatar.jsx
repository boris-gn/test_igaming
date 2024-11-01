import React from "react";

import avatar from "../../assets/images/avatar.png";

import "./Avatar.scss";

const Avatar = () => {
    return (
        <div className="avatar">
            <img src={avatar} alt="avatar" />
        </div>
    )
}

export default Avatar;
