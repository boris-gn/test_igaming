import React from "react";

import './Card.scss';

const Card = ({ label, name, commission, imgUrl }) => {
  return (
    <div className="card">
      {label && (
        <span className={`card-label ${label === "TRUSTED" ? "card-label-trusted" : ""}`}>
          {label}
        </span>
      )}
      <img src={imgUrl} alt={name} className="card-logo" />
      <h3 className="card-name">{name}</h3>
      <p className="card-commission">Commission {commission}</p>
    </div>
  );
};

export default Card;
