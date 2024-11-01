import React, { useState } from 'react';

import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg"
import { ReactComponent as Plus } from "../../assets/icons/plus.svg"

import './HeaderDropdown.scss';

const HeaderDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-button" onClick={toggleDropdown}>
        <span className="price">125.02 $</span>
        <span className="discount">13%</span>
        <Arrow />
      </div>
      <div className="plus-button">
        <Plus />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-item">100$ 10%</div>
          <div className="dropdown-item">348$ 20%</div>
          <div className="dropdown-item">435$ 30%</div>
        </div>
      )}
    </div>
  );
};

export default HeaderDropdown;
